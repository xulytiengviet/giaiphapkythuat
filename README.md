# 100 giải pháp kỹ thuật cho hệ sinh thái công nghệ CVNSS4.0

**Website:** https://xulytiengviet.github.io/giaiphapkythuat/

Thư viện mã nguồn tĩnh gồm **100 hướng nghiên cứu và phát triển (R&D)** trong **10 nhóm công nghệ** liên quan đến xử lý tiếng Việt, CVNSS4.0, Base27, trit/tam phân, TinyLLM, BilaScript/NHDL, robotics, IoT, RFID, RAG và an toàn AI.

> **Lưu ý sở hữu trí tuệ:** Đây là 100 *đề xuất giải pháp kỹ thuật*, **không phải** 100 bằng sáng chế đã được cấp. Các lợi ích về nén dữ liệu, tốc độ, bộ nhớ, điện năng và độ chính xác là giả thuyết cần đo thực nghiệm. Việc kế thừa công nghệ Tesla, xAI/Grok, X hay các dự án khác cần tuân thủ giấy phép và quyền sở hữu trí tuệ tương ứng.

## Tính năng

- **Retro Pixel UI:** nền ô lưới 20 px, font VT323 cho tiêu đề/mã số/nút, font Be Vietnam Pro cho đoạn văn tiếng Việt, viền vuông và hard shadow.
- **100 thẻ giải pháp, 10 nhóm:** tìm kiếm không phân biệt dấu tiếng Việt, phân loại, sắp xếp theo mã/tên/ưu tiên.
- **Popup hồ sơ chi tiết:** bài toán, nguyên lý, quy trình triển khai, thực nghiệm, chỉ tiêu, đối chứng, đầu ra và rủi ro/IP.
- **12 hướng ưu tiên:** nhấn mục sắp xếp *12 hướng ưu tiên* để đưa các đề xuất có tiềm năng thực nghiệm rõ lên đầu.
- **Bookmark cục bộ:** lưu/xem giải pháp yêu thích bằng localStorage, không cần đăng nhập.
- **Liên kết sâu:** dạng `#gp-001` đến `#gp-100`; mở trực tiếp hồ sơ, sao chép URL.
- **Xuất hồ sơ:** tải từng giải pháp thành `.md` (Markdown).
- **Bàn phím:** phím `/` đưa con trỏ vào tìm kiếm; `Esc` đóng popup; chuyển focus khi mở/đóng.
- **Giao diện sáng/tối:** nút `◐` trên thanh điều hướng, lưu lựa chọn trên trình duyệt.
- **GitHub Pages:** HTML/CSS/JavaScript thuần; không framework, không API key, không backend.

## Cấu trúc thư mục

```text
index.html         Trang và SEO; giữ nguyên các ID sử dụng trong app.js
styles.css         Retro Pixel Design System v3.0, responsive, print, dark theme
app.js             Tìm kiếm, nhóm, popup, deep link, bookmark, Markdown, theme
data.js            100 hồ sơ thuộc 10 nhóm công nghệ
favicon.svg        Biểu tượng pixel
scripts/validate.mjs
.github/workflows/validate.yml
README.md
```

## Chạy cục bộ

Tải repository, mở `index.html` trong trình duyệt hoặc khởi động web server tĩnh từ thư mục gốc:

```sh
python -m http.server 8000
```

Sau đó mở `http://localhost:8000/`. Không cần cấu hình API key hay npm packages.

## Kiểm thử

Yêu cầu **Node.js 18+** để chạy bộ kiểm thử tùy chọn:

```sh
node --check app.js
node --check data.js
node scripts/validate.mjs
```

Kiểm tra số lượng 100, ID liên tục, slug, nhóm, trường dữ liệu, file CSS/HTML và các ID giao diện quan trọng.

## Triển khai trên GitHub Pages

Repository → **Settings → Pages** → **Build and deployment** → **Deploy from a branch** → chọn `main` và `/ (root)` → **Save**.

Sau khi GitHub Pages hoàn tất bản dựng, truy cập:

https://xulytiengviet.github.io/giaiphapkythuat/

Khi cần làm mới CSS/JS, có thể tăng phiên bản query `?v=3` trong `index.html` để tránh cache cũ. GitHub Pages có thể cần thời gian để hiển thị commit mới.

## Phương pháp quản trị danh mục

Mỗi hồ sơ trong `data.js` được gắn:

- `id`, `slug`, `name`, `category`, `stage`;
- `problem`, `mechanism`, `experiment`;
- `steps`, `metrics`, `baseline`, `risk`.

Khi điều chỉnh một ý tưởng, cần giữ mã định danh ổn định để không làm đứt liên kết công khai. Không biến kết quả dự kiến thành tuyên bố đã được chứng minh nếu chưa có dữ liệu thực nghiệm. Nên tra cứu prior art và cân nhắc thời điểm công bố nếu có dự định đăng ký sở hữu trí tuệ.

## Quyền và nguồn

Việc công khai repository không đồng nghĩa tự động cấp quyền sử dụng các bằng sáng chế của Tesla, Grok/xAI, X hoặc bên thứ ba. Kiểm tra từng nguồn dữ liệu, thư viện, trọng số mô hình và công nghệ phần cứng trước khi sử dụng. Trường hợp repository chưa có giấy phép mã nguồn rõ ràng, quyền sử dụng, sửa đổi và phân phối không nên được giả định ngoài những quyền mặc định của nền tảng.
