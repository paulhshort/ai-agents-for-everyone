#!/usr/bin/env bash

# ============================================================
# WHAT IS THIS FILE?
# ============================================================
# This is a hook script that sends you a notification when Codex
# finishes a task. Useful when you give Codex a long-running job
# and want to go do something else while it works.
#
# WHAT DOES IT DO?
# When a Codex task completes, this script:
#   1. Plays a sound (so you hear it finish)
#   2. Shows a desktop notification (so you see it finish)
#   3. Logs the completion to a file (so you have a record)
#
# HOW HOOKS WORK IN CODEX:
# Hooks are scripts that run at specific moments. You configure
# them in .codex/hooks.json like this:
#
#   {
#     "hooks": [
#       {
#         "event": "on-complete",
#         "command": "bash .codex/hooks/notify-on-complete.sh"
#       }
#     ]
#   }
#
# WHERE DOES THIS FILE GO?
# Save it to: .codex/hooks/notify-on-complete.sh
# Then add it to: .codex/hooks.json
#
# HOW TO MAKE IT WORK:
# 1. Save this file to your project
# 2. Make it executable: chmod +x .codex/hooks/notify-on-complete.sh
# 3. Add it to .codex/hooks.json (see format above)
# 4. On Linux, install libnotify: sudo apt install libnotify-bin
#    On macOS, it works out of the box.
#    On Windows, notifications use PowerShell.
# ============================================================

set -euo pipefail

# ============================================================
# CONFIGURATION
# You can customize these values:
# ============================================================

# The title that appears in the notification popup
NOTIFICATION_TITLE="Codex Task Complete"

# The message in the notification
NOTIFICATION_MESSAGE="Your Codex task has finished. Check the results!"

# Where to save the log of completed tasks
LOG_FILE=".codex/completion-log.txt"

# ============================================================
# STEP 1: LOG THE COMPLETION
# ============================================================
# Record when the task finished. This gives you a history of
# all completed tasks.

# Create the log directory if it does not exist
mkdir -p "$(dirname "$LOG_FILE")"

# Add a timestamped entry to the log
echo "[$(date '+%Y-%m-%d %H:%M:%S')] Task completed" >> "$LOG_FILE"

echo "Task completion logged to $LOG_FILE"

# ============================================================
# STEP 2: PLAY A SOUND
# ============================================================
# Different operating systems have different ways to play sounds.
# We detect the OS and use the appropriate method.

play_sound() {
  if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS -- use the built-in "afplay" command with the system sound
    afplay /System/Library/Sounds/Glass.aiff 2>/dev/null &
  elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
    # Linux -- use paplay (PulseAudio) if available
    if command -v paplay &>/dev/null; then
      paplay /usr/share/sounds/freedesktop/stereo/complete.oga 2>/dev/null &
    fi
  elif [[ "$OSTYPE" == "msys" || "$OSTYPE" == "cygwin" ]]; then
    # Windows (Git Bash / MSYS2)
    powershell.exe -c "[System.Media.SystemSounds]::Exclamation.Play()" 2>/dev/null &
  fi
}

play_sound
echo "Notification sound played."

# ============================================================
# STEP 3: SHOW A DESKTOP NOTIFICATION
# ============================================================
# Desktop notifications are the popup messages that appear in
# the corner of your screen.

show_notification() {
  if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS -- use osascript to show a native notification
    osascript -e "display notification \"$NOTIFICATION_MESSAGE\" with title \"$NOTIFICATION_TITLE\"" 2>/dev/null

  elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
    # Linux -- use notify-send (part of libnotify)
    if command -v notify-send &>/dev/null; then
      notify-send "$NOTIFICATION_TITLE" "$NOTIFICATION_MESSAGE" 2>/dev/null
    else
      echo "Tip: Install libnotify-bin for desktop notifications."
    fi

  elif [[ "$OSTYPE" == "msys" || "$OSTYPE" == "cygwin" ]]; then
    # Windows -- use PowerShell to create a toast notification
    powershell.exe -c "
      [Windows.UI.Notifications.ToastNotificationManager, Windows.UI.Notifications, ContentType = WindowsRuntime] > \$null
      \$template = [Windows.UI.Notifications.ToastNotificationManager]::GetTemplateContent([Windows.UI.Notifications.ToastTemplateType]::ToastText02)
      \$textNodes = \$template.GetElementsByTagName('text')
      \$textNodes.Item(0).AppendChild(\$template.CreateTextNode('$NOTIFICATION_TITLE')) > \$null
      \$textNodes.Item(1).AppendChild(\$template.CreateTextNode('$NOTIFICATION_MESSAGE')) > \$null
      \$toast = [Windows.UI.Notifications.ToastNotification]::new(\$template)
      [Windows.UI.Notifications.ToastNotificationManager]::CreateToastNotifier('Codex').Show(\$toast)
    " 2>/dev/null
  fi
}

show_notification
echo "Desktop notification sent."

echo ""
echo "All done! Check your notifications."
