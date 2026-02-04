# Tổng quan

Đây là repository hướng dẫn tích hợp và ứng dụng MCP, Skill, Rule vào dự án để Human và Agent có thể phối hợp đạt được output gần với kỳ vọng nhất.

---

# Danh sách các phần

- [MCP](https://modelcontextprotocol.io/docs/getting-started/intro)
- [SKILL](https://skills.sh/)

---

# MCP

## Khái niệm

MCP (Model Context Protocol) là giao thức chuẩn cho phép các AI Agent giao tiếp và tương tác với các nguồn dữ liệu, công cụ và dịch vụ bên ngoài một cách nhất quán. MCP cung cấp một lớp trừu tượng giúp Agent có thể truy cập thông tin và thực thi các tác vụ mà không cần phải tích hợp riêng lẻ từng dịch vụ. Hiểu đơn giản có nhiều nguồn data, đừng bắt Agent phải tạo 1 protocal riêng cho từng nguồn data.

## Ứng dụng

- **Truy cập dữ liệu**: Kết nối với cơ sở dữ liệu, API, file system
- **Tích hợp công cụ**: Sử dụng các công cụ bên ngoài như trình duyệt, terminal, IDE
- **Mở rộng khả năng**: Thêm các chức năng mới cho Agent mà không cần thay đổi code gốc
- **Tự động hóa workflow**: Kết nối nhiều dịch vụ để tạo quy trình làm việc tự động

## Cách cài đặt trên từng Agent IDE

### <img src="https://claude.ai/favicon.ico" width="20" height="20" style="vertical-align: middle;"> Claude Code CLI

1. Tạo file cấu hình tại `.mcp.json` (ở thư mục gốc của project)
2. Thêm cấu hình MCP server: [link](https://code.claude.com/docs/en/mcp)

```json
{
  "mcpServers": {
    "server-name": {
      "command": "uvx",
      "args": ["package-name@latest"],
      "env": {},
      "disabled": false,
      "autoApprove": []
    }
  }
}
```

3. Restart Claude Code để áp dụng thay đổi

### <img src="https://www.cursor.com/favicon.ico" width="20" height="20" style="vertical-align: middle;"> Cursor IDE

1. Tạo file cấu hình tại `.cursor/mcp.json`
2. Thêm cấu hình tương tự như Claude Code [link](https://cursor.com/docs/context/mcp)
3. Restart Cursor để áp dụng thay đổi

### <img src="https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg" width="20" height="20" style="vertical-align: middle;"> Gemini Antigravity

1. Tạo file cấu hình tại `.gemini/antigravity/mcp_config.json`
2. Cấu hình theo format của Claude Code [link](https://antigravity.google/docs/mcp)
3. Reload extension để áp dụng

### <img src="https://code.visualstudio.com/favicon.ico" width="20" height="20" style="vertical-align: middle;"> VS Code

1. Tạo file cấu hình tại `.vscode/mcp.json`
2. Cài đặt extension hỗ trợ MCP (nếu có) [link](https://code.visualstudio.com/docs/copilot/customization/mcp-servers)
3. Cấu hình server theo format chuẩn

### <img src="https://kiro.dev/favicon.ico" width="20" height="20" style="vertical-align: middle;"> Kiro IDE

1. Tạo file cấu hình tại `.kiro/settings/mcp.json`
2. Thêm cấu hình tương tự như Claude Code: [link](https://kiro.dev/docs/mcp/configuration/)
3. Khởi động lại Kiro hoặc reconnect MCP server từ MCP Server view

---

# SKILL

## Khái niệm

Skill là các kỹ năng hoặc khả năng được định nghĩa sẵn mà Agent có thể sử dụng để thực hiện các tác vụ cụ thể. Mỗi skill đại diện cho một chức năng hoặc quy trình làm việc được tối ưu hóa.

## Ứng dụng

- **Tái sử dụng code**: Định nghĩa một lần, sử dụng nhiều lần
- **Chuẩn hóa quy trình**: Đảm bảo các tác vụ được thực hiện theo cách nhất quán
- **Tăng hiệu suất**: Agent có thể nhanh chóng áp dụng các pattern đã được tối ưu
- **Dễ dàng bảo trì**: Cập nhật skill ở một nơi, áp dụng cho toàn bộ dự án

## Skills CLI

Skills CLI (`npx skills`) là package manager cho hệ sinh thái agent skills. Bạn có thể tìm kiếm và cài đặt skills từ cộng đồng.

**Các lệnh chính:**

```bash
npx skills find [query]        # Tìm kiếm skills
npx skills add <package>       # Cài đặt skill
npx skills check               # Kiểm tra cập nhật
npx skills update              # Cập nhật tất cả skills
```

**Duyệt skills tại:** https://skills.sh/

## Cách cài đặt Skill trên từng Agent IDE

### <img src="https://www.windsurf.ai/favicon.ico" width="20" height="20" style="vertical-align: middle;"> Windsurf IDE (Cascade)

**Thư mục:** `.windsurf/skills/` (workspace) hoặc `~/.codeium/windsurf/skills/` (global)

```bash
# Workspace skill (chỉ cho project hiện tại)
npx skills add <owner/repo@skill> --dir .windsurf/skills

# Global skill (cho tất cả projects)
npx skills add <owner/repo@skill> --dir ~/.codeium/windsurf/skills
```

Ví dụ:

```bash
npx skills add vercel-labs/skills@find-skills --dir .windsurf/skills
```

Cascade sẽ tự động nhận diện và invoke skills khi cần thiết.

**Lưu ý:** Windsurf cũng hỗ trợ tạo skill qua UI: Cascade panel → Menu (3 dots) → Skills → + Workspace/Global

### <img src="https://cline.bot/favicon.ico" width="20" height="20" style="vertical-align: middle;"> Cline (VSCode Extension)

**Thư mục:** `.agents/skills/`

```bash
npx skills add <owner/repo@skill> --dir .agents/skills
```

Ví dụ:

```bash
npx skills add vercel-labs/skills@find-skills --dir .agents/skills
```

Restart VSCode hoặc reload Cline extension để áp dụng skill mới.

### <img src="https://claude.ai/favicon.ico" width="20" height="20" style="vertical-align: middle;"> Claude Code CLI

**Thư mục:** `.claude/skills/`

```bash
npx skills add <owner/repo@skill> --dir .claude/skills
```

Ví dụ:

```bash
npx skills add vercel-labs/skills@find-skills --dir .claude/skills
```

Skill sẽ được tải tự động khi khởi động Claude Code.

### <img src="https://codex.storage/favicon.ico" width="20" height="20" style="vertical-align: middle;"> Codex

**Thư mục:** `.codex/skills/`

```bash
npx skills add <owner/repo@skill> --dir .codex/skills
```

Ví dụ:

```bash
npx skills add vercel-labs/skills@find-skills --dir .codex/skills
```

Reload Codex để nhận diện skill mới.

### <img src="https://www.cursor.com/favicon.ico" width="20" height="20" style="vertical-align: middle;"> Cursor IDE

**Thư mục:** `.cursor/skills/`

```bash
npx skills add <owner/repo@skill> --dir .cursor/skills
```

Ví dụ:

```bash
npx skills add vercel-labs/skills@find-skills --dir .cursor/skills
```

Restart Cursor để áp dụng thay đổi.

### <img src="https://github.githubassets.com/favicons/favicon.svg" width="20" height="20" style="vertical-align: middle;"> GitHub Copilot (VSCode)

**Thư mục:** `.github/skills/`

```bash
npx skills add <owner/repo@skill> --dir .github/skills
```

Ví dụ:

```bash
npx skills add vercel-labs/skills@find-skills --dir .github/skills
```

Skills sẽ được GitHub Copilot tự động nhận diện trong workspace.

### <img src="https://kiro.dev/favicon.ico" width="20" height="20" style="vertical-align: middle;"> Kiro IDE

**Thư mục:** `.kiro/skills/`

```bash
npx skills add <owner/repo@skill> --dir .kiro/skills
```

Ví dụ:

```bash
npx skills add vercel-labs/skills@find-skills --dir .kiro/skills
```

Skill sẽ tự động được tải khi Kiro khởi động.

### Cài đặt Global (cho tất cả projects)

Để cài đặt skill ở cấp độ user (áp dụng cho tất cả projects):

```bash
npx skills add <owner/repo@skill> -g -y
```

## Ví dụ cài đặt Skill

### Cài đặt skill tìm kiếm skills khác

```bash
# Windsurf IDE
npx skills add vercel-labs/skills@find-skills --dir .windsurf/skills

# Cline (VSCode)
npx skills add vercel-labs/skills@find-skills --dir .agents/skills

# Claude Code CLI
npx skills add vercel-labs/skills@find-skills --dir .claude/skills

# Codex
npx skills add vercel-labs/skills@find-skills --dir .codex/skills

# Cursor IDE
npx skills add vercel-labs/skills@find-skills --dir .cursor/skills

# GitHub Copilot (VSCode)
npx skills add vercel-labs/skills@find-skills --dir .github/skills

# Kiro IDE
npx skills add vercel-labs/skills@find-skills --dir .kiro/skills

# Global (cho tất cả projects)
npx skills add vercel-labs/skills@find-skills -g -y
```

### Cài đặt skill React best practices

```bash
# Windsurf IDE
npx skills add vercel-labs/agent-skills@vercel-react-best-practices --dir .windsurf/skills

# Cline (VSCode)
npx skills add vercel-labs/agent-skills@vercel-react-best-practices --dir .agents/skills

# Claude Code CLI
npx skills add vercel-labs/agent-skills@vercel-react-best-practices --dir .claude/skills

# Codex
npx skills add vercel-labs/agent-skills@vercel-react-best-practices --dir .codex/skills

# Cursor IDE
npx skills add vercel-labs/agent-skills@vercel-react-best-practices --dir .cursor/skills

# GitHub Copilot (VSCode)
npx skills add vercel-labs/agent-skills@vercel-react-best-practices --dir .github/skills

# Kiro IDE
npx skills add vercel-labs/agent-skills@vercel-react-best-practices --dir .kiro/skills
```

## Tạo Skill tùy chỉnh

1. Khởi tạo skill mới:

```bash
npx skills init my-custom-skill
```

2. Chỉnh sửa file `SKILL.md` trong thư mục skill
3. Định nghĩa rõ ràng:
   - `name`: Tên skill
   - `description`: Mô tả chức năng
   - Nội dung hướng dẫn sử dụng

## Sử dụng Skill

- Agent sẽ tự động nhận diện và sử dụng skills đã cài đặt
- Bạn có thể yêu cầu Agent sử dụng skill cụ thể trong prompt
- Kết hợp nhiều skills để tạo workflow phức tạp

---

## Đóng góp

Mọi đóng góp đều được chào đón! Vui lòng tạo Pull Request hoặc Issue để thảo luận về các cải tiến.

## License

MIT License
