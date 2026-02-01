# Tổng quan

Đây là repository hướng dẫn tích hợp và ứng dụng MCP, Skill, Rule vào dự án để Human và Agent có thể phối hợp đạt được output gần với kỳ vọng nhất.

---

# Danh sách các phần

- [MCP](#mcp)
- [SKILL](#skill)

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

## Cách tạo và sử dụng Skill

### Tạo Skill mới

1. Tạo file skill trong thư mục `.kiro/skills/` hoặc thư mục tương ứng
2. Định nghĩa skill với cú pháp markdown hoặc JSON
3. Mô tả rõ ràng input, output và các bước thực hiện

### Sử dụng Skill

- Gọi skill bằng cách tham chiếu tên skill trong prompt
- Agent sẽ tự động áp dụng quy trình đã định nghĩa
- Có thể kết hợp nhiều skill để tạo workflow phức tạp

---

## Đóng góp

Mọi đóng góp đều được chào đón! Vui lòng tạo Pull Request hoặc Issue để thảo luận về các cải tiến.

## License

MIT License
