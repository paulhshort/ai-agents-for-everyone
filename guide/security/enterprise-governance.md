# Enterprise Governance

This page is for organizations that want to manage how Codex is used across teams, enforce security policies, monitor usage, and meet compliance requirements. Even if you are not an IT administrator, understanding these features helps you appreciate the controls your organization might put in place.

---

## System-Level Configuration: Company-Wide Rules

In addition to personal and project settings, administrators can create a **system-level configuration** that applies to every person using Codex on a machine (or across the organization).

| Config Level | File Location | Who Sets It | What It Does |
|---|---|---|---|
| System-wide | `/etc/codex/config.toml` | IT administrators | Sets baseline rules everyone must follow |
| Personal | `~/.codex/config.toml` | Individual user | Personal preferences (cannot override system rules) |
| Project | `.codex/config.toml` | Project team | Project-specific settings |

**How it works:** System-level settings act as a floor (and sometimes a ceiling). For example, if the system config says `sandbox = "workspace-write"`, no individual user can downgrade to a less secure mode. They could use a more restrictive mode (like `read-only`) but not a less restrictive one (like `danger-full-access`).

**Analogy:** Think of it like a building's fire code. Individual tenants can add extra safety features to their apartments, but they cannot remove the building-wide fire alarms.

---

## ExecPolicy: Precise Rule Enforcement

ExecPolicy goes beyond simple sandbox modes. It lets administrators write detailed rules about exactly what Codex can and cannot do. These rules are written in a language called Starlark and are enforced at the system level.

### What ExecPolicy Can Control

| Rule Type | What It Controls | Example |
|---|---|---|
| **Command restrictions** | Which terminal commands Codex can run | "Codex may run `ls` and `cat` but not `rm` or `sudo`" |
| **File access rules** | Which files or folders Codex can read or write | "Codex cannot access anything in /sensitive-data/" |
| **Tool restrictions** | Which Codex tools are allowed | "Codex may read files but may not execute shell commands" |
| **Pattern matching** | Rules based on file names or content patterns | "Codex cannot write to any file ending in .key or .pem" |

### How It Is Set Up

ExecPolicy rule files are placed in the system configuration directory and referenced in the system-level `config.toml`. Individual users cannot override or disable these rules.

```toml
# In /etc/codex/config.toml
exec_policy = "/etc/codex/policies/company-policy.star"
```

**Analogy:** If the sandbox is a fence around a yard, ExecPolicy is a detailed security system that controls which doors open, what times they are unlocked, and who has which key cards.

---

## Credential Management

Organizations need to handle API keys and other credentials securely. Codex supports several credential storage methods:

| Method | How It Works | Security Level | Best For |
|---|---|---|---|
| **Keyring** | Stores credentials in your operating system's secure credential storage (like macOS Keychain or Windows Credential Manager) | High | Individual workstations |
| **File** | Stores credentials in a file on disk | Medium (depends on file permissions) | Simple setups |
| **Ephemeral** | Credentials exist only in memory and disappear when Codex closes | Highest | Maximum security environments |
| **Environment variables** | Credentials are set as system environment variables | Medium | CI/CD pipelines and automation |

### Configuring Credential Storage

```toml
# In config.toml
credential_store = "keyring"
```

**Recommendation:** Use `keyring` for most situations. It integrates with your operating system's built-in secure storage, so credentials are encrypted and protected by your system login.

---

## Custom CA Certificates

Many organizations route internet traffic through a corporate proxy server that uses its own security certificates. If your company does this, Codex needs to know about these certificates to communicate properly.

**What this means in plain language:** Your company's network has a special "ID card" it uses to verify internet traffic. Codex needs a copy of this ID card so it can work through your company's network.

### How to Set It Up

```toml
# Point Codex to your company's certificate
# Can be set as an environment variable
CODEX_CA_CERTIFICATE = "/path/to/company-certificate.pem"
```

Or in your config file:

```toml
ca_certificate = "/path/to/company-certificate.pem"
```

Your IT department will provide the certificate file. If Codex cannot connect to OpenAI's servers, this is one of the first things to check.

---

## OpenTelemetry Integration: Monitoring Usage

OpenTelemetry is a standard system for monitoring how software is being used. Organizations can connect Codex to their existing monitoring infrastructure to track:

| What You Can Monitor | Why It Matters |
|---|---|
| **Which models are being used** | Understand usage patterns across the team |
| **How many requests are made** | Track usage volume and trends |
| **Which tools are being invoked** | See what Codex is actually doing |
| **Error rates** | Identify problems early |
| **Session duration** | Understand how long tasks take |

**Analogy:** OpenTelemetry is like the dashboard in a fleet of delivery trucks. The trucks (Codex instances) drive around doing their jobs, and the dashboard gives the manager (IT admin) a view of where they all are, how they are performing, and if anything needs attention.

### Setting It Up

OpenTelemetry is configured through environment variables and integrates with standard observability platforms (like Datadog, Grafana, or Splunk).

---

## Analytics Controls

Organizations can control what analytics data Codex collects and where it goes:

| Control | What It Does |
|---|---|
| **Disable telemetry** | Turn off all usage data collection |
| **Custom endpoints** | Send analytics to your own servers instead of OpenAI's defaults |
| **Data filtering** | Control what information is included in analytics |

These settings are typically managed at the system level by IT administrators.

---

## Admin Controls: What IT Can Enforce

Here is a summary of everything an IT administrator can control:

### Security Controls

- **Minimum sandbox mode:** Prevent users from using modes less restrictive than the company allows
- **Required approval policy:** Force a specific approval policy across the organization
- **ExecPolicy rules:** Define detailed rules about what Codex can and cannot do
- **Network restrictions:** Control whether and where Codex can connect to the internet

### Model Controls

- **Allowed models:** Restrict which AI models users can choose
- **Default model:** Set the organization's preferred model

### Data Controls

- **Credential storage method:** Enforce secure credential storage
- **Analytics configuration:** Control what data is collected and where it goes
- **CA certificate:** Ensure all traffic goes through the corporate proxy

### User Experience Controls

- **Default settings:** Set sensible defaults for all users
- **Feature flags:** Enable or disable specific Codex features

---

## Deployment Patterns for Organizations

### Small Team (5-20 people)

- Set up a system-level `config.toml` with sensible defaults
- Share an AGENTS.md template for common projects
- Brief the team on security basics

### Medium Organization (20-200 people)

- Everything above, plus:
- Implement ExecPolicy rules for sensitive projects
- Set up OpenTelemetry monitoring
- Use keyring-based credential management
- Designate a Codex admin to manage settings

### Large Enterprise (200+ people)

- Everything above, plus:
- Custom CA certificates for proxy integration
- Detailed ExecPolicy rules tailored to different teams
- Full OpenTelemetry integration with existing monitoring
- Centralized configuration management
- Regular security audits of Codex usage patterns
- Enterprise plan with OpenAI for data privacy guarantees

---

## Getting Started with Enterprise Setup

If you are an IT administrator looking to roll out Codex across your organization:

1. **Start with the system config:** Create `/etc/codex/config.toml` with your organization's baseline settings.
2. **Set the sandbox mode:** Choose the most restrictive mode that still lets your team work effectively.
3. **Configure credentials:** Set up keyring-based credential storage.
4. **Write ExecPolicy rules** (if needed): Define what Codex can and cannot do based on your security requirements.
5. **Set up monitoring:** Connect OpenTelemetry to your existing monitoring tools.
6. **Create an onboarding guide:** Help your team understand the settings and why they are in place.
7. **Test with a pilot group:** Roll out to a small team first, gather feedback, and adjust before wider deployment.
