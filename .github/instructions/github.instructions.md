# Anweisungen für den GitHub MCP-Server

Diese Datei enthält Richtlinien für den GitHub MCP-Server, um die Interaktion mit diesem Repository über KI-Assistenten (wie GitHub Copilot Chat) zu optimieren.

## 1. Kontext & Fokus

- Priorisiere das Verständnis der Ordnerstruktur in `/src` und den Konfigurationsdateien im Hauptverzeichnis.
- Wenn eine Aufgabe die GitHub-API erfordert, nutze bevorzugt die Tools des `github-mcp-server`.

## 2. Issue-Management

- Bei der Analyse von Problemen:
    - Suche nach offenen Issues mit den Labels `bug` oder `enhancement`.
    - Prüfe verwandte Pull Requests, bevor du Lösungen vorschlägst.
- Verwende `list_issues`, um sich einen Überblick zu verschaffen.

## 3. Pull Request (PR) Workflow

- Bevor du einen neuen PR vorschlägst:
    - Überprüfe den `main` oder `develop` Branch auf aktuelle Änderungen.
    - Analysiere offene Pull Requests, um Konflikte zu vermeiden.
- Bei der Code-Review:
    - Konzentriere dich auf [z.B. Sicherheitslücken, Performance, Einhaltung des Styleguides].

## 4. GitHub Actions & CI/CD

- Bei Fehlern in der CI/CD-Pipeline:
    - Analysiere die letzten `workflow_runs`.
    - Untersuche die Logs der fehlerhaften Jobs, um die Ursache zu identifizieren.

## 5. Kommunikationsstil

- Sei prägnant und nenne die verwendeten GitHub-Tools (z.B. "Ich habe `get_file_contents` genutzt, um...").
- Wenn eine Aktion (wie das Erstellen eines Issues) ein `personal access token` mit höheren Rechten erfordert, informiere den Nutzer.

---

**Hinweis:** Diese Anweisungen sind für die Verwendung mit dem GitHub MCP Server konzipiert.
