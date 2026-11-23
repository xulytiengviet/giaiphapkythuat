/* Bộ dữ liệu 100 giả thuyết giải pháp kỹ thuật — mọi kết quả cần được kiểm chứng. */
window.CATALOG_GROUPS=[
  {
    "name": "CVNSS4.0 & tiếng Việt",
    "icon": "type",
    "short": "Ngôn ngữ",
    "steps": [
      "Thu thập và chia tập dữ liệu tiếng Việt theo miền, vùng và lỗi nhập liệu.",
      "Đặc tả phép biến đổi ký hiệu; ghi rõ trường hợp nhập nhằng và khả năng khôi phục Unicode.",
      "Tạo thư viện chạy offline cùng bộ kiểm thử tự động.",
      "Chạy đánh giá trên thiết bị đích và phân tích từng loại lỗi."
    ],
    "metric": "CER/WER, tỷ lệ round-trip, thời gian xử lý, bytes/ký tự",
    "baseline": "Unicode chuẩn, quy tắc chuẩn hóa hiện có, mô hình n-gram hoặc thư viện xử lý tiếng Việt",
    "risk": "Không đánh đồng chuẩn hóa mất thông tin với mã hóa đảo ngược; cần dữ liệu có giấy phép."
  },
  {
    "name": "Base27 & máy tam phân",
    "icon": "cpu",
    "short": "Tam phân",
    "steps": [
      "Xác định chính xác biểu diễn trit, dải giá trị và phép toán được hỗ trợ.",
      "Thiết kế thuật toán hoặc RTL cùng mô hình tham chiếu nhị phân.",
      "Mô phỏng bit-exact, kiểm tra biên, lỗi và độ trễ.",
      "Đo tiêu thụ tài nguyên, độ chính xác và điện năng trên thiết bị đích."
    ],
    "metric": "bits/ký hiệu, LUT/FF, latency, throughput, joule/giao dịch, BER",
    "baseline": "Đóng gói nhị phân/byte, FPGA ALU nhị phân hoặc codec thông dụng",
    "risk": "27=3³ chỉ là phép ánh xạ; không mặc nhiên mang lại nén hay tiết kiệm năng lượng."
  },
  {
    "name": "Tokenizer & biểu diễn",
    "icon": "layers",
    "short": "Token",
    "steps": [
      "Xây tập văn bản thử nghiệm có train/dev/test tách biệt.",
      "Xây bộ mã hóa với nguyên tắc round-trip và phương án fallback.",
      "Huấn luyện từ vựng/chỉ mục trên cùng ngân sách dữ liệu.",
      "So sánh chất lượng, kích thước và chi phí suy luận hoặc truy xuất."
    ],
    "metric": "token/câu, OOV, recall@k, MRR, RAM và thời gian encode/decode",
    "baseline": "Byte tokenizer, BPE/Unigram, vector index phổ biến",
    "risk": "Giảm số token không đồng nghĩa với cải thiện chất lượng mô hình; tránh rò rỉ dữ liệu thử nghiệm."
  },
  {
    "name": "TinyLLM & Grok/MoE",
    "icon": "brain",
    "short": "TinyLLM",
    "steps": [
      "Chọn một bài toán tiếng Việt có tiêu chí đánh giá công khai.",
      "Huấn luyện hoặc chưng cất mô hình trong ngân sách tham số và bộ nhớ xác định.",
      "Lượng tử hóa/định tuyến có đo chất lượng từng bước.",
      "Đánh giá trên CPU, ARM và phần cứng nhỏ với tập ngoài miền."
    ],
    "metric": "độ chính xác tác vụ, kích thước mô hình, peak RAM, token/s, joule/token",
    "baseline": "Mô hình dense cùng kích thước, n-gram, mô hình lượng tử nhị phân",
    "risk": "Kiến trúc MoE lớn không thể thu nhỏ cơ học; cần kiểm tra giấy phép trọng số và dữ liệu teacher."
  },
  {
    "name": "BilaScript & NHDL",
    "icon": "code",
    "short": "Biên dịch",
    "steps": [
      "Đặc tả ngữ pháp, ngữ nghĩa, kiểu dữ liệu và hành động hợp lệ.",
      "Xây AST, typed IR, bộ kiểm tra tĩnh và code generator.",
      "Kiểm tra tính tương đương giữa mã nguồn, IR và mã đích.",
      "Tổng hợp/mô phỏng mạch hoặc thực thi trên thiết bị để đo hiệu năng."
    ],
    "metric": "test pass rate, lỗi phát hiện sớm, LUT/FF, timing, thời gian biên dịch",
    "baseline": "VHDL/C thủ công, trình thông dịch thông thường, DSL điều khiển hiện có",
    "risk": "Không khẳng định chứng minh hình thức khi chỉ có unit test; nêu rõ lớp thuộc tính được kiểm chứng."
  },
  {
    "name": "Robotics & VGSC",
    "icon": "bot",
    "short": "Robot",
    "steps": [
      "Định nghĩa Typed Task IR và trạng thái an toàn có thể kiểm tra.",
      "Kết nối ASR, nhận thức môi trường, grounding và thư viện skill.",
      "Thử nghiệm trong ROS 2 mô phỏng với tình huống lỗi/khẩn cấp.",
      "Chạy trên robot thật dưới giám sát, đo độ trễ và tỷ lệ dừng an toàn."
    ],
    "metric": "task success, grounding accuracy, p95 latency, unsafe-action rate, recovery time",
    "baseline": "Pipeline ASR→rule-based action, ROS 2 skill controller chuẩn",
    "risk": "Không dùng đầu ra LLM làm lệnh động cơ trực tiếp; an toàn phải được bảo vệ độc lập."
  },
  {
    "name": "IoT, RFID & năng lượng",
    "icon": "radio",
    "short": "IoT/RFID",
    "steps": [
      "Thiết lập thông số môi trường, công suất và điều kiện vận hành.",
      "Thiết kế nguyên mẫu RF, cảm biến hoặc quản trị năng lượng.",
      "Đo trong phòng thí nghiệm với cùng điều kiện đối chứng.",
      "Thử nghiệm ngoại trường, mô hình hóa nhiễu và phân tích tuổi thọ."
    ],
    "metric": "joule/event, battery life, read range, BER/PER, latency, BOM",
    "baseline": "Gateway LoRaWAN, đầu đọc RFID, scheduler nhúng hoặc mạch quản trị nguồn thông dụng",
    "risk": "Phải tuân thủ quy định tần số vô tuyến, EMC và an toàn điện; không suy ra quyền dùng sáng chế Tesla."
  },
  {
    "name": "X, ngôn ngữ mạng & RAG",
    "icon": "network",
    "short": "Social/RAG",
    "steps": [
      "Chỉ nhập dữ liệu có quyền sử dụng và truy xuất nguồn gốc.",
      "Xây pipeline làm sạch, chuẩn hóa và gắn mốc thời gian.",
      "Phát triển mô hình xử lý incremental và bằng chứng truy xuất.",
      "Đánh giá chống trùng, sai lệch thời gian, rò rỉ và chi phí vận hành."
    ],
    "metric": "precision/recall, freshness, p95 latency, provenance coverage, chi phí bản ghi",
    "baseline": "Keyword search, RAG cơ bản hoặc ETL theo lô",
    "risk": "Không mặc định nội dung X được phép scraping hoặc huấn luyện; bảo vệ thông tin cá nhân."
  },
  {
    "name": "An toàn & bảo mật AI",
    "icon": "shield",
    "short": "Bảo mật",
    "steps": [
      "Thiết lập threat model, quyền hạn và ranh giới tin cậy.",
      "Xây lớp xác minh độc lập, fail-closed và log kiểm toán.",
      "Kiểm thử lỗi, nhiễu, injection, mất điện hoặc dữ liệu bị thay đổi.",
      "Đo mức giảm rủi ro, false positive và tác động đến hiệu năng."
    ],
    "metric": "vi phạm chính sách, false positive/negative, MTTR, overhead, coverage",
    "baseline": "Hệ thống chưa có lớp kiểm soát; bộ kiểm thử bảo mật hiện có",
    "risk": "Không gọi một mã kiểm tra lỗi là mật mã; tránh ghi log bí mật và thông tin nhận dạng cá nhân."
  },
  {
    "name": "Ứng dụng kỹ thuật Việt Nam",
    "icon": "file-text",
    "short": "Ứng dụng",
    "steps": [
      "Thu thập yêu cầu thực địa và xác định các chuẩn/quy định áp dụng.",
      "Xây nguyên mẫu kết nối lõi ngôn ngữ với nghiệp vụ cụ thể.",
      "Đo hiệu quả trên bộ dữ liệu và quy trình thực tế.",
      "Đánh giá khả năng vận hành, khả năng tái lập và chi phí bảo trì."
    ],
    "metric": "task success, error rate, turnaround time, RAM, chi phí vận hành",
    "baseline": "Quy trình hiện tại, phần mềm thông dụng và thao tác thủ công",
    "risk": "Không tuyên bố tuân thủ chuẩn pháp lý hay chuẩn thiết bị khi chưa thẩm định độc lập."
  }
];
window.CATALOG_SOLUTIONS=[
  {
    "id": 1,
    "slug": "gp-001",
    "name": "CVNSS-Reversible Codec",
    "category": 0,
    "problem": "Mã hóa tiếng Việt thường mất thông tin khi nhiều Unicode cùng đi về một ký hiệu rút gọn.",
    "mechanism": "Tách chuỗi ký hiệu chính và kênh phụ đánh dấu vần nhập nhằng, duy trì phép giải mã không mất dữ liệu.",
    "experiment": "Đối chứng 1 triệu chuỗi có dấu, không dấu và NFC/NFD; kiểm tra round-trip và băng thông.",
    "steps": [
      "Thu thập và chia tập dữ liệu tiếng Việt theo miền, vùng và lỗi nhập liệu.",
      "Đặc tả phép biến đổi ký hiệu; ghi rõ trường hợp nhập nhằng và khả năng khôi phục Unicode.",
      "Tạo thư viện chạy offline cùng bộ kiểm thử tự động.",
      "Chạy đánh giá trên thiết bị đích và phân tích từng loại lỗi."
    ],
    "metrics": "CER/WER, tỷ lệ round-trip, thời gian xử lý, bytes/ký tự",
    "baseline": "Unicode chuẩn, quy tắc chuẩn hóa hiện có, mô hình n-gram hoặc thư viện xử lý tiếng Việt",
    "risk": "Không đánh đồng chuẩn hóa mất thông tin với mã hóa đảo ngược; cần dữ liệu có giấy phép.",
    "stage": "Nền tảng"
  },
  {
    "id": 2,
    "slug": "gp-002",
    "name": "Vietnamese Ambiguity Resolver",
    "category": 0,
    "problem": "Một mã rút gọn có thể trỏ đến nhiều âm tiết và từ khác nhau.",
    "mechanism": "Kết hợp automaton âm tiết, bảng ứng viên canonical và bộ chấm điểm ngữ cảnh có giới hạn tài nguyên.",
    "experiment": "Đo lỗi từng nhóm nhập nhằng và latency trên CPU phổ thông.",
    "steps": [
      "Thu thập và chia tập dữ liệu tiếng Việt theo miền, vùng và lỗi nhập liệu.",
      "Đặc tả phép biến đổi ký hiệu; ghi rõ trường hợp nhập nhằng và khả năng khôi phục Unicode.",
      "Tạo thư viện chạy offline cùng bộ kiểm thử tự động.",
      "Chạy đánh giá trên thiết bị đích và phân tích từng loại lỗi."
    ],
    "metrics": "CER/WER, tỷ lệ round-trip, thời gian xử lý, bytes/ký tự",
    "baseline": "Unicode chuẩn, quy tắc chuẩn hóa hiện có, mô hình n-gram hoặc thư viện xử lý tiếng Việt",
    "risk": "Không đánh đồng chuẩn hóa mất thông tin với mã hóa đảo ngược; cần dữ liệu có giấy phép.",
    "stage": "Nền tảng"
  },
  {
    "id": 3,
    "slug": "gp-003",
    "name": "Accent-Free Restoration Engine",
    "category": 0,
    "problem": "Truy vấn tiếng Việt không dấu làm giảm tỷ lệ truy xuất và độ đúng của câu trả lời.",
    "mechanism": "Dùng n-gram, chuẩn hóa teencode và bộ xếp hạng ứng viên trước khi tìm kiếm; giữ nguyên văn bản gốc để đối chiếu.",
    "experiment": "Thử trên câu có dấu và 1000 câu không dấu; đo CER/WER và top-k retrieval.",
    "steps": [
      "Thu thập và chia tập dữ liệu tiếng Việt theo miền, vùng và lỗi nhập liệu.",
      "Đặc tả phép biến đổi ký hiệu; ghi rõ trường hợp nhập nhằng và khả năng khôi phục Unicode.",
      "Tạo thư viện chạy offline cùng bộ kiểm thử tự động.",
      "Chạy đánh giá trên thiết bị đích và phân tích từng loại lỗi."
    ],
    "metrics": "CER/WER, tỷ lệ round-trip, thời gian xử lý, bytes/ký tự",
    "baseline": "Unicode chuẩn, quy tắc chuẩn hóa hiện có, mô hình n-gram hoặc thư viện xử lý tiếng Việt",
    "risk": "Không đánh đồng chuẩn hóa mất thông tin với mã hóa đảo ngược; cần dữ liệu có giấy phép.",
    "stage": "Nền tảng"
  },
  {
    "id": 4,
    "slug": "gp-004",
    "name": "Vietnamese Noise-Adaptive Normalizer",
    "category": 0,
    "problem": "Một đoạn chat có thể trộn Telex, VNI, VIQR, lỗi bàn phím và viết tắt.",
    "mechanism": "Bộ nhận diện kiểu nhập theo cửa sổ ký tự kết hợp quy tắc biến đổi và confidence score.",
    "experiment": "Thử các chuỗi nhiễu tổng hợp và dữ liệu thực được phép sử dụng.",
    "steps": [
      "Thu thập và chia tập dữ liệu tiếng Việt theo miền, vùng và lỗi nhập liệu.",
      "Đặc tả phép biến đổi ký hiệu; ghi rõ trường hợp nhập nhằng và khả năng khôi phục Unicode.",
      "Tạo thư viện chạy offline cùng bộ kiểm thử tự động.",
      "Chạy đánh giá trên thiết bị đích và phân tích từng loại lỗi."
    ],
    "metrics": "CER/WER, tỷ lệ round-trip, thời gian xử lý, bytes/ký tự",
    "baseline": "Unicode chuẩn, quy tắc chuẩn hóa hiện có, mô hình n-gram hoặc thư viện xử lý tiếng Việt",
    "risk": "Không đánh đồng chuẩn hóa mất thông tin với mã hóa đảo ngược; cần dữ liệu có giấy phép.",
    "stage": "Nền tảng"
  },
  {
    "id": 5,
    "slug": "gp-005",
    "name": "CVNSS Phonetic Fingerprint",
    "category": 0,
    "problem": "Nhận diện các biến thể cùng cách đọc trong tra cứu văn bản chưa ổn định.",
    "mechanism": "Sinh chữ ký âm vị CVNSS4.0, bỏ qua một số sai khác chính tả có kiểm soát và so khớp nhanh.",
    "experiment": "Đo precision/recall trên các cặp gần âm, khác nghĩa.",
    "steps": [
      "Thu thập và chia tập dữ liệu tiếng Việt theo miền, vùng và lỗi nhập liệu.",
      "Đặc tả phép biến đổi ký hiệu; ghi rõ trường hợp nhập nhằng và khả năng khôi phục Unicode.",
      "Tạo thư viện chạy offline cùng bộ kiểm thử tự động.",
      "Chạy đánh giá trên thiết bị đích và phân tích từng loại lỗi."
    ],
    "metrics": "CER/WER, tỷ lệ round-trip, thời gian xử lý, bytes/ký tự",
    "baseline": "Unicode chuẩn, quy tắc chuẩn hóa hiện có, mô hình n-gram hoặc thư viện xử lý tiếng Việt",
    "risk": "Không đánh đồng chuẩn hóa mất thông tin với mã hóa đảo ngược; cần dữ liệu có giấy phép.",
    "stage": "Nền tảng"
  },
  {
    "id": 6,
    "slug": "gp-006",
    "name": "Vietnamese OCR Error-Correction Circuit",
    "category": 0,
    "problem": "OCR tiếng Việt dễ nhầm dấu, chữ đ/độ cao nét và ký tự tương tự.",
    "mechanism": "Ghép confidence từng ký tự OCR với lattice âm tiết và bộ ràng buộc từ điển; chỉ sửa khi đủ bằng chứng.",
    "experiment": "Đánh giá CER trước/sau sửa và tỷ lệ sửa sai văn bản đúng.",
    "steps": [
      "Thu thập và chia tập dữ liệu tiếng Việt theo miền, vùng và lỗi nhập liệu.",
      "Đặc tả phép biến đổi ký hiệu; ghi rõ trường hợp nhập nhằng và khả năng khôi phục Unicode.",
      "Tạo thư viện chạy offline cùng bộ kiểm thử tự động.",
      "Chạy đánh giá trên thiết bị đích và phân tích từng loại lỗi."
    ],
    "metrics": "CER/WER, tỷ lệ round-trip, thời gian xử lý, bytes/ký tự",
    "baseline": "Unicode chuẩn, quy tắc chuẩn hóa hiện có, mô hình n-gram hoặc thư viện xử lý tiếng Việt",
    "risk": "Không đánh đồng chuẩn hóa mất thông tin với mã hóa đảo ngược; cần dữ liệu có giấy phép.",
    "stage": "Nền tảng"
  },
  {
    "id": 7,
    "slug": "gp-007",
    "name": "Vietnamese Streaming Normalizer",
    "category": 0,
    "problem": "Chuẩn hóa lại toàn bộ câu khi gõ từng ký tự gây trễ không cần thiết.",
    "mechanism": "Duy trì trạng thái parser gia tăng và cửa sổ rollback tối thiểu khi xuất hiện dấu hoặc sửa phím.",
    "experiment": "Đo p95 latency trên luồng gõ 30–120 ký tự/phút và paste lớn.",
    "steps": [
      "Thu thập và chia tập dữ liệu tiếng Việt theo miền, vùng và lỗi nhập liệu.",
      "Đặc tả phép biến đổi ký hiệu; ghi rõ trường hợp nhập nhằng và khả năng khôi phục Unicode.",
      "Tạo thư viện chạy offline cùng bộ kiểm thử tự động.",
      "Chạy đánh giá trên thiết bị đích và phân tích từng loại lỗi."
    ],
    "metrics": "CER/WER, tỷ lệ round-trip, thời gian xử lý, bytes/ký tự",
    "baseline": "Unicode chuẩn, quy tắc chuẩn hóa hiện có, mô hình n-gram hoặc thư viện xử lý tiếng Việt",
    "risk": "Không đánh đồng chuẩn hóa mất thông tin với mã hóa đảo ngược; cần dữ liệu có giấy phép.",
    "stage": "Nền tảng"
  },
  {
    "id": 8,
    "slug": "gp-008",
    "name": "Dialect-Aware Vietnamese Encoder",
    "category": 0,
    "problem": "Cùng nội dung nói có các biến thể phát âm vùng miền gây sai ASR.",
    "mechanism": "Ánh xạ biến thể âm học vào biểu diễn chuẩn chung đồng thời giữ nhãn phương ngữ khi có căn cứ.",
    "experiment": "Đánh giá WER theo vùng, mức công bằng và lỗi chuyển miền.",
    "steps": [
      "Thu thập và chia tập dữ liệu tiếng Việt theo miền, vùng và lỗi nhập liệu.",
      "Đặc tả phép biến đổi ký hiệu; ghi rõ trường hợp nhập nhằng và khả năng khôi phục Unicode.",
      "Tạo thư viện chạy offline cùng bộ kiểm thử tự động.",
      "Chạy đánh giá trên thiết bị đích và phân tích từng loại lỗi."
    ],
    "metrics": "CER/WER, tỷ lệ round-trip, thời gian xử lý, bytes/ký tự",
    "baseline": "Unicode chuẩn, quy tắc chuẩn hóa hiện có, mô hình n-gram hoặc thư viện xử lý tiếng Việt",
    "risk": "Không đánh đồng chuẩn hóa mất thông tin với mã hóa đảo ngược; cần dữ liệu có giấy phép.",
    "stage": "Nền tảng"
  },
  {
    "id": 9,
    "slug": "gp-009",
    "name": "Unicode Homograph Security Filter",
    "category": 0,
    "problem": "Ký tự trông giống nhau hoặc dấu Unicode tổ hợp có thể giả mạo tiếng Việt.",
    "mechanism": "Chuẩn hóa có kiểm soát, phát hiện confusable và cảnh báo vị trí đáng ngờ thay vì âm thầm xóa.",
    "experiment": "Tập thử giả mạo tên miền, văn bản và tệp có ký tự lạ; đo false positive.",
    "steps": [
      "Thu thập và chia tập dữ liệu tiếng Việt theo miền, vùng và lỗi nhập liệu.",
      "Đặc tả phép biến đổi ký hiệu; ghi rõ trường hợp nhập nhằng và khả năng khôi phục Unicode.",
      "Tạo thư viện chạy offline cùng bộ kiểm thử tự động.",
      "Chạy đánh giá trên thiết bị đích và phân tích từng loại lỗi."
    ],
    "metrics": "CER/WER, tỷ lệ round-trip, thời gian xử lý, bytes/ký tự",
    "baseline": "Unicode chuẩn, quy tắc chuẩn hóa hiện có, mô hình n-gram hoặc thư viện xử lý tiếng Việt",
    "risk": "Không đánh đồng chuẩn hóa mất thông tin với mã hóa đảo ngược; cần dữ liệu có giấy phép.",
    "stage": "Nền tảng"
  },
  {
    "id": 10,
    "slug": "gp-010",
    "name": "CVNSS Self-Repair Encoder",
    "category": 0,
    "problem": "Chuỗi CVNSS4.0 lỗi do truyền tin có thể giải mã sai toàn câu.",
    "mechanism": "Kết hợp từ điển âm tiết, ràng buộc vị trí và checksum nội bộ để khoanh vùng lỗi.",
    "experiment": "Đánh giá sửa một hoặc nhiều ký hiệu lỗi dưới các mức nhiễu xác định.",
    "steps": [
      "Thu thập và chia tập dữ liệu tiếng Việt theo miền, vùng và lỗi nhập liệu.",
      "Đặc tả phép biến đổi ký hiệu; ghi rõ trường hợp nhập nhằng và khả năng khôi phục Unicode.",
      "Tạo thư viện chạy offline cùng bộ kiểm thử tự động.",
      "Chạy đánh giá trên thiết bị đích và phân tích từng loại lỗi."
    ],
    "metrics": "CER/WER, tỷ lệ round-trip, thời gian xử lý, bytes/ký tự",
    "baseline": "Unicode chuẩn, quy tắc chuẩn hóa hiện có, mô hình n-gram hoặc thư viện xử lý tiếng Việt",
    "risk": "Không đánh đồng chuẩn hóa mất thông tin với mã hóa đảo ngược; cần dữ liệu có giấy phép.",
    "stage": "Nền tảng"
  },
  {
    "id": 11,
    "slug": "gp-011",
    "name": "Base27 Compact Data Packing",
    "category": 1,
    "problem": "Lưu mỗi ký hiệu Base27 trong một byte làm lãng phí miền giá trị.",
    "mechanism": "Đóng khối 27^n ký hiệu vào số bit tối thiểu và thêm chỉ mục block để giải mã ngẫu nhiên.",
    "experiment": "So sánh bytes/ký hiệu, thông lượng và truy cập ngẫu nhiên với byte array.",
    "steps": [
      "Xác định chính xác biểu diễn trit, dải giá trị và phép toán được hỗ trợ.",
      "Thiết kế thuật toán hoặc RTL cùng mô hình tham chiếu nhị phân.",
      "Mô phỏng bit-exact, kiểm tra biên, lỗi và độ trễ.",
      "Đo tiêu thụ tài nguyên, độ chính xác và điện năng trên thiết bị đích."
    ],
    "metrics": "bits/ký hiệu, LUT/FF, latency, throughput, joule/giao dịch, BER",
    "baseline": "Đóng gói nhị phân/byte, FPGA ALU nhị phân hoặc codec thông dụng",
    "risk": "27=3³ chỉ là phép ánh xạ; không mặc nhiên mang lại nén hay tiết kiệm năng lượng.",
    "stage": "Nền tảng"
  },
  {
    "id": 12,
    "slug": "gp-012",
    "name": "Balanced-Ternary Arithmetic Unit",
    "category": 1,
    "problem": "Cần chứng minh ALU tam phân khả thi trên thiết bị FPGA nhị phân.",
    "mechanism": "Thiết kế phép cộng, trừ, so sánh trit với mã hóa ba trạng thái xác định và bit-accurate reference.",
    "experiment": "Đo LUT, FF, Fmax và công suất so với ALU nhị phân cùng bài toán.",
    "steps": [
      "Xác định chính xác biểu diễn trit, dải giá trị và phép toán được hỗ trợ.",
      "Thiết kế thuật toán hoặc RTL cùng mô hình tham chiếu nhị phân.",
      "Mô phỏng bit-exact, kiểm tra biên, lỗi và độ trễ.",
      "Đo tiêu thụ tài nguyên, độ chính xác và điện năng trên thiết bị đích."
    ],
    "metrics": "bits/ký hiệu, LUT/FF, latency, throughput, joule/giao dịch, BER",
    "baseline": "Đóng gói nhị phân/byte, FPGA ALU nhị phân hoặc codec thông dụng",
    "risk": "27=3³ chỉ là phép ánh xạ; không mặc nhiên mang lại nén hay tiết kiệm năng lượng.",
    "stage": "Nền tảng"
  },
  {
    "id": 13,
    "slug": "gp-013",
    "name": "Ternary Error-Correcting Codec",
    "category": 1,
    "problem": "Khung trit có thể bị sai khi truyền qua kênh nhiễu.",
    "mechanism": "Tạo mã khối và bộ giải mã sửa lỗi trên GF(3) hoặc mã ba mức phù hợp kênh.",
    "experiment": "Mô phỏng kênh lỗi độc lập và burst; vẽ BER/PER theo SNR.",
    "steps": [
      "Xác định chính xác biểu diễn trit, dải giá trị và phép toán được hỗ trợ.",
      "Thiết kế thuật toán hoặc RTL cùng mô hình tham chiếu nhị phân.",
      "Mô phỏng bit-exact, kiểm tra biên, lỗi và độ trễ.",
      "Đo tiêu thụ tài nguyên, độ chính xác và điện năng trên thiết bị đích."
    ],
    "metrics": "bits/ký hiệu, LUT/FF, latency, throughput, joule/giao dịch, BER",
    "baseline": "Đóng gói nhị phân/byte, FPGA ALU nhị phân hoặc codec thông dụng",
    "risk": "27=3³ chỉ là phép ánh xạ; không mặc nhiên mang lại nén hay tiết kiệm năng lượng.",
    "stage": "Nền tảng"
  },
  {
    "id": 14,
    "slug": "gp-014",
    "name": "Ternary Sparse Compression",
    "category": 1,
    "problem": "Trọng số ba mức chứa cấu trúc lặp lại chưa tận dụng tối ưu.",
    "mechanism": "Mã hóa run-length hoặc index sparse kết hợp packing ba trạng thái.",
    "experiment": "Đánh giá tỷ lệ nén và chi phí giải nén trên mô hình lượng tử hóa.",
    "steps": [
      "Xác định chính xác biểu diễn trit, dải giá trị và phép toán được hỗ trợ.",
      "Thiết kế thuật toán hoặc RTL cùng mô hình tham chiếu nhị phân.",
      "Mô phỏng bit-exact, kiểm tra biên, lỗi và độ trễ.",
      "Đo tiêu thụ tài nguyên, độ chính xác và điện năng trên thiết bị đích."
    ],
    "metrics": "bits/ký hiệu, LUT/FF, latency, throughput, joule/giao dịch, BER",
    "baseline": "Đóng gói nhị phân/byte, FPGA ALU nhị phân hoặc codec thông dụng",
    "risk": "27=3³ chỉ là phép ánh xạ; không mặc nhiên mang lại nén hay tiết kiệm năng lượng.",
    "stage": "Nền tảng"
  },
  {
    "id": 15,
    "slug": "gp-015",
    "name": "Base27 Delta Telemetry",
    "category": 1,
    "problem": "Cảm biến IoT liên tục phát lại số đo gần giống nhau.",
    "mechanism": "Biểu diễn sai khác theo thời gian dưới dạng trit và chỉ gửi khối thay đổi cùng checkpoint.",
    "experiment": "Đo năng lượng/bản tin và khả năng phục hồi khi mất packet.",
    "steps": [
      "Xác định chính xác biểu diễn trit, dải giá trị và phép toán được hỗ trợ.",
      "Thiết kế thuật toán hoặc RTL cùng mô hình tham chiếu nhị phân.",
      "Mô phỏng bit-exact, kiểm tra biên, lỗi và độ trễ.",
      "Đo tiêu thụ tài nguyên, độ chính xác và điện năng trên thiết bị đích."
    ],
    "metrics": "bits/ký hiệu, LUT/FF, latency, throughput, joule/giao dịch, BER",
    "baseline": "Đóng gói nhị phân/byte, FPGA ALU nhị phân hoặc codec thông dụng",
    "risk": "27=3³ chỉ là phép ánh xạ; không mặc nhiên mang lại nén hay tiết kiệm năng lượng.",
    "stage": "Nền tảng"
  },
  {
    "id": 16,
    "slug": "gp-016",
    "name": "Trit Memory Addressing Controller",
    "category": 1,
    "problem": "Địa chỉ logic tam phân phải hoạt động trên bộ nhớ nhị phân có sẵn.",
    "mechanism": "Ánh xạ địa chỉ base3 sang bộ nhớ tuyến tính với phân hoạch block và bộ đệm truy cập.",
    "experiment": "Đo số chu kỳ truy cập và overhead trên BRAM/SRAM.",
    "steps": [
      "Xác định chính xác biểu diễn trit, dải giá trị và phép toán được hỗ trợ.",
      "Thiết kế thuật toán hoặc RTL cùng mô hình tham chiếu nhị phân.",
      "Mô phỏng bit-exact, kiểm tra biên, lỗi và độ trễ.",
      "Đo tiêu thụ tài nguyên, độ chính xác và điện năng trên thiết bị đích."
    ],
    "metrics": "bits/ký hiệu, LUT/FF, latency, throughput, joule/giao dịch, BER",
    "baseline": "Đóng gói nhị phân/byte, FPGA ALU nhị phân hoặc codec thông dụng",
    "risk": "27=3³ chỉ là phép ánh xạ; không mặc nhiên mang lại nén hay tiết kiệm năng lượng.",
    "stage": "Nền tảng"
  },
  {
    "id": 17,
    "slug": "gp-017",
    "name": "Ternary SRAM Emulation Layer",
    "category": 1,
    "problem": "Thiết bị phổ thông không có ô nhớ vật lý ba trạng thái.",
    "mechanism": "Mô phỏng trit trên cặp bit, phát hiện trạng thái vô hiệu và API đọc/ghi nhất quán.",
    "experiment": "Đo dung lượng, năng lượng và tỷ lệ lỗi khi fault injection.",
    "steps": [
      "Xác định chính xác biểu diễn trit, dải giá trị và phép toán được hỗ trợ.",
      "Thiết kế thuật toán hoặc RTL cùng mô hình tham chiếu nhị phân.",
      "Mô phỏng bit-exact, kiểm tra biên, lỗi và độ trễ.",
      "Đo tiêu thụ tài nguyên, độ chính xác và điện năng trên thiết bị đích."
    ],
    "metrics": "bits/ký hiệu, LUT/FF, latency, throughput, joule/giao dịch, BER",
    "baseline": "Đóng gói nhị phân/byte, FPGA ALU nhị phân hoặc codec thông dụng",
    "risk": "27=3³ chỉ là phép ánh xạ; không mặc nhiên mang lại nén hay tiết kiệm năng lượng.",
    "stage": "Nền tảng"
  },
  {
    "id": 18,
    "slug": "gp-018",
    "name": "Ternary Fixed-Point DSP",
    "category": 1,
    "problem": "Xử lý tín hiệu tam phân thiếu thư viện toán số rõ độ chính xác.",
    "mechanism": "Thiết lập số cố định signed-trit với chính sách làm tròn và bão hòa; xây phép MAC.",
    "experiment": "So sánh sai số phổ, độ trễ và LUT với fixed-point nhị phân.",
    "steps": [
      "Xác định chính xác biểu diễn trit, dải giá trị và phép toán được hỗ trợ.",
      "Thiết kế thuật toán hoặc RTL cùng mô hình tham chiếu nhị phân.",
      "Mô phỏng bit-exact, kiểm tra biên, lỗi và độ trễ.",
      "Đo tiêu thụ tài nguyên, độ chính xác và điện năng trên thiết bị đích."
    ],
    "metrics": "bits/ký hiệu, LUT/FF, latency, throughput, joule/giao dịch, BER",
    "baseline": "Đóng gói nhị phân/byte, FPGA ALU nhị phân hoặc codec thông dụng",
    "risk": "27=3³ chỉ là phép ánh xạ; không mặc nhiên mang lại nén hay tiết kiệm năng lượng.",
    "stage": "Nền tảng"
  },
  {
    "id": 19,
    "slug": "gp-019",
    "name": "Adaptive Binary–Ternary Transport",
    "category": 1,
    "problem": "Một phương thức mã hóa không tối ưu cho mọi loại dữ liệu/kênh.",
    "mechanism": "Ước lượng entropy và chất lượng kết nối rồi chọn binary packing hoặc Base27/trit từng frame.",
    "experiment": "Đo payload hiệu dụng và chi phí chuyển chế độ trên nhiều tập dữ liệu.",
    "steps": [
      "Xác định chính xác biểu diễn trit, dải giá trị và phép toán được hỗ trợ.",
      "Thiết kế thuật toán hoặc RTL cùng mô hình tham chiếu nhị phân.",
      "Mô phỏng bit-exact, kiểm tra biên, lỗi và độ trễ.",
      "Đo tiêu thụ tài nguyên, độ chính xác và điện năng trên thiết bị đích."
    ],
    "metrics": "bits/ký hiệu, LUT/FF, latency, throughput, joule/giao dịch, BER",
    "baseline": "Đóng gói nhị phân/byte, FPGA ALU nhị phân hoặc codec thông dụng",
    "risk": "27=3³ chỉ là phép ánh xạ; không mặc nhiên mang lại nén hay tiết kiệm năng lượng.",
    "stage": "Nền tảng"
  },
  {
    "id": 20,
    "slug": "gp-020",
    "name": "Trit Synchronization and Recovery",
    "category": 1,
    "problem": "Mất ký hiệu khiến bộ giải mã trit mất ranh giới khung.",
    "mechanism": "Tạo preamble, sequence number và cơ chế tái đồng bộ qua marker ba mức.",
    "experiment": "Thử chèn/xóa ký hiệu, đo thời gian và độ chính xác phục hồi.",
    "steps": [
      "Xác định chính xác biểu diễn trit, dải giá trị và phép toán được hỗ trợ.",
      "Thiết kế thuật toán hoặc RTL cùng mô hình tham chiếu nhị phân.",
      "Mô phỏng bit-exact, kiểm tra biên, lỗi và độ trễ.",
      "Đo tiêu thụ tài nguyên, độ chính xác và điện năng trên thiết bị đích."
    ],
    "metrics": "bits/ký hiệu, LUT/FF, latency, throughput, joule/giao dịch, BER",
    "baseline": "Đóng gói nhị phân/byte, FPGA ALU nhị phân hoặc codec thông dụng",
    "risk": "27=3³ chỉ là phép ánh xạ; không mặc nhiên mang lại nén hay tiết kiệm năng lượng.",
    "stage": "Nền tảng"
  },
  {
    "id": 21,
    "slug": "gp-021",
    "name": "CVNSS Hybrid Tokenizer",
    "category": 2,
    "problem": "Tokenizer chung phân mảnh tiếng Việt và có thể bỏ mất biến thể gốc.",
    "mechanism": "Ghép Unicode, CVNSS âm tiết và byte fallback với mapping trả ngược chuẩn xác.",
    "experiment": "Đo tokens/câu, round-trip và chất lượng downstream.",
    "steps": [
      "Xây tập văn bản thử nghiệm có train/dev/test tách biệt.",
      "Xây bộ mã hóa với nguyên tắc round-trip và phương án fallback.",
      "Huấn luyện từ vựng/chỉ mục trên cùng ngân sách dữ liệu.",
      "So sánh chất lượng, kích thước và chi phí suy luận hoặc truy xuất."
    ],
    "metrics": "token/câu, OOV, recall@k, MRR, RAM và thời gian encode/decode",
    "baseline": "Byte tokenizer, BPE/Unigram, vector index phổ biến",
    "risk": "Giảm số token không đồng nghĩa với cải thiện chất lượng mô hình; tránh rò rỉ dữ liệu thử nghiệm.",
    "stage": "Nền tảng"
  },
  {
    "id": 22,
    "slug": "gp-022",
    "name": "Tone-Aware Subword Tokenizer",
    "category": 2,
    "problem": "Các token subword vô tình cắt rời thông tin thanh điệu quan trọng.",
    "mechanism": "Định nghĩa ranh giới phụ âm-vần-thanh trong thuật toán phân đoạn và huấn luyện từ vựng.",
    "experiment": "So sánh perplexity và token fertility với BPE cơ sở.",
    "steps": [
      "Xây tập văn bản thử nghiệm có train/dev/test tách biệt.",
      "Xây bộ mã hóa với nguyên tắc round-trip và phương án fallback.",
      "Huấn luyện từ vựng/chỉ mục trên cùng ngân sách dữ liệu.",
      "So sánh chất lượng, kích thước và chi phí suy luận hoặc truy xuất."
    ],
    "metrics": "token/câu, OOV, recall@k, MRR, RAM và thời gian encode/decode",
    "baseline": "Byte tokenizer, BPE/Unigram, vector index phổ biến",
    "risk": "Giảm số token không đồng nghĩa với cải thiện chất lượng mô hình; tránh rò rỉ dữ liệu thử nghiệm.",
    "stage": "Nền tảng"
  },
  {
    "id": 23,
    "slug": "gp-023",
    "name": "Base27 Native Token Vocabulary",
    "category": 2,
    "problem": "Token từ chuỗi CVNSS4.0 cần bảng từ vựng giới hạn phù hợp edge.",
    "mechanism": "Huấn luyện vocabulary theo cụm Base27 phổ biến, thêm escape cho Unicode ngoài bảng.",
    "experiment": "Đo tỷ lệ fallback và kích thước embedding.",
    "steps": [
      "Xây tập văn bản thử nghiệm có train/dev/test tách biệt.",
      "Xây bộ mã hóa với nguyên tắc round-trip và phương án fallback.",
      "Huấn luyện từ vựng/chỉ mục trên cùng ngân sách dữ liệu.",
      "So sánh chất lượng, kích thước và chi phí suy luận hoặc truy xuất."
    ],
    "metrics": "token/câu, OOV, recall@k, MRR, RAM và thời gian encode/decode",
    "baseline": "Byte tokenizer, BPE/Unigram, vector index phổ biến",
    "risk": "Giảm số token không đồng nghĩa với cải thiện chất lượng mô hình; tránh rò rỉ dữ liệu thử nghiệm.",
    "stage": "Nền tảng"
  },
  {
    "id": 24,
    "slug": "gp-024",
    "name": "Entropy-Adaptive Vietnamese Tokenization",
    "category": 2,
    "problem": "Miền văn bản kỹ thuật và đời sống có phân bố token rất khác nhau.",
    "mechanism": "Điều chỉnh độ dài đoạn token theo entropy từng miền mà vẫn duy trì mã hóa nhất quán.",
    "experiment": "Đo nén và độ chính xác theo nhiều miền không trùng dữ liệu huấn luyện.",
    "steps": [
      "Xây tập văn bản thử nghiệm có train/dev/test tách biệt.",
      "Xây bộ mã hóa với nguyên tắc round-trip và phương án fallback.",
      "Huấn luyện từ vựng/chỉ mục trên cùng ngân sách dữ liệu.",
      "So sánh chất lượng, kích thước và chi phí suy luận hoặc truy xuất."
    ],
    "metrics": "token/câu, OOV, recall@k, MRR, RAM và thời gian encode/decode",
    "baseline": "Byte tokenizer, BPE/Unigram, vector index phổ biến",
    "risk": "Giảm số token không đồng nghĩa với cải thiện chất lượng mô hình; tránh rò rỉ dữ liệu thử nghiệm.",
    "stage": "Nền tảng"
  },
  {
    "id": 25,
    "slug": "gp-025",
    "name": "Dynamic Vocabulary Overlay",
    "category": 2,
    "problem": "Thuật ngữ chuyên ngành mới làm mô hình nhỏ gặp từ hiếm.",
    "mechanism": "Đặt từ điển overlay phiên bản hóa ngoài bộ tokenizer lõi, không thay đổi token ID cũ.",
    "experiment": "Thử cập nhật 1000 thuật ngữ và hồi quy compatibility.",
    "steps": [
      "Xây tập văn bản thử nghiệm có train/dev/test tách biệt.",
      "Xây bộ mã hóa với nguyên tắc round-trip và phương án fallback.",
      "Huấn luyện từ vựng/chỉ mục trên cùng ngân sách dữ liệu.",
      "So sánh chất lượng, kích thước và chi phí suy luận hoặc truy xuất."
    ],
    "metrics": "token/câu, OOV, recall@k, MRR, RAM và thời gian encode/decode",
    "baseline": "Byte tokenizer, BPE/Unigram, vector index phổ biến",
    "risk": "Giảm số token không đồng nghĩa với cải thiện chất lượng mô hình; tránh rò rỉ dữ liệu thử nghiệm.",
    "stage": "Nền tảng"
  },
  {
    "id": 26,
    "slug": "gp-026",
    "name": "ASR Lattice Tokenizer",
    "category": 2,
    "problem": "Đầu ra ASR top-1 làm mất các giả thuyết có thể đúng.",
    "mechanism": "Tiếp nhận n-best lattice, chuyển thành token graph và giải mã theo ngữ cảnh nhiệm vụ.",
    "experiment": "Đo WER cùng độ trễ trong bộ lời nói nhiễu.",
    "steps": [
      "Xây tập văn bản thử nghiệm có train/dev/test tách biệt.",
      "Xây bộ mã hóa với nguyên tắc round-trip và phương án fallback.",
      "Huấn luyện từ vựng/chỉ mục trên cùng ngân sách dữ liệu.",
      "So sánh chất lượng, kích thước và chi phí suy luận hoặc truy xuất."
    ],
    "metrics": "token/câu, OOV, recall@k, MRR, RAM và thời gian encode/decode",
    "baseline": "Byte tokenizer, BPE/Unigram, vector index phổ biến",
    "risk": "Giảm số token không đồng nghĩa với cải thiện chất lượng mô hình; tránh rò rỉ dữ liệu thử nghiệm.",
    "stage": "Nền tảng"
  },
  {
    "id": 27,
    "slug": "gp-027",
    "name": "Vietnamese Code-Switch Tokenizer",
    "category": 2,
    "problem": "Câu trộn tiếng Việt và tiếng Anh gây phân mảnh vượt mức.",
    "mechanism": "Nhận diện span ngôn ngữ bằng bộ phát hiện nhỏ rồi phối hợp nhiều bộ token hóa.",
    "experiment": "Đánh giá câu kỹ thuật song ngữ, OOV và throughput.",
    "steps": [
      "Xây tập văn bản thử nghiệm có train/dev/test tách biệt.",
      "Xây bộ mã hóa với nguyên tắc round-trip và phương án fallback.",
      "Huấn luyện từ vựng/chỉ mục trên cùng ngân sách dữ liệu.",
      "So sánh chất lượng, kích thước và chi phí suy luận hoặc truy xuất."
    ],
    "metrics": "token/câu, OOV, recall@k, MRR, RAM và thời gian encode/decode",
    "baseline": "Byte tokenizer, BPE/Unigram, vector index phổ biến",
    "risk": "Giảm số token không đồng nghĩa với cải thiện chất lượng mô hình; tránh rò rỉ dữ liệu thử nghiệm.",
    "stage": "Nền tảng"
  },
  {
    "id": 28,
    "slug": "gp-028",
    "name": "Ternary Semantic Embedding",
    "category": 2,
    "problem": "Vector float làm chỉ mục ngữ nghĩa tốn RAM trên thiết bị nhỏ.",
    "mechanism": "Lượng tử hóa vector về -1/0/+1 với scaling theo nhóm và thuật toán xếp hạng bù sai số.",
    "experiment": "Đo recall@10, RAM và tốc độ trên cùng kho truy xuất.",
    "steps": [
      "Xây tập văn bản thử nghiệm có train/dev/test tách biệt.",
      "Xây bộ mã hóa với nguyên tắc round-trip và phương án fallback.",
      "Huấn luyện từ vựng/chỉ mục trên cùng ngân sách dữ liệu.",
      "So sánh chất lượng, kích thước và chi phí suy luận hoặc truy xuất."
    ],
    "metrics": "token/câu, OOV, recall@k, MRR, RAM và thời gian encode/decode",
    "baseline": "Byte tokenizer, BPE/Unigram, vector index phổ biến",
    "risk": "Giảm số token không đồng nghĩa với cải thiện chất lượng mô hình; tránh rò rỉ dữ liệu thử nghiệm.",
    "stage": "Nền tảng"
  },
  {
    "id": 29,
    "slug": "gp-029",
    "name": "Compact Vietnamese Vector Index",
    "category": 2,
    "problem": "Chỉ mục ANN tiêu chuẩn có overhead lớn ở kích thước nhỏ.",
    "mechanism": "Sắp xếp vector đã lượng tử hóa và xây index phân khối tối ưu cache.",
    "experiment": "Đo MRR, index size, latency theo số tài liệu.",
    "steps": [
      "Xây tập văn bản thử nghiệm có train/dev/test tách biệt.",
      "Xây bộ mã hóa với nguyên tắc round-trip và phương án fallback.",
      "Huấn luyện từ vựng/chỉ mục trên cùng ngân sách dữ liệu.",
      "So sánh chất lượng, kích thước và chi phí suy luận hoặc truy xuất."
    ],
    "metrics": "token/câu, OOV, recall@k, MRR, RAM và thời gian encode/decode",
    "baseline": "Byte tokenizer, BPE/Unigram, vector index phổ biến",
    "risk": "Giảm số token không đồng nghĩa với cải thiện chất lượng mô hình; tránh rò rỉ dữ liệu thử nghiệm.",
    "stage": "Nền tảng"
  },
  {
    "id": 30,
    "slug": "gp-030",
    "name": "Streaming Prefix Token Cache",
    "category": 2,
    "problem": "Gõ tiếp nội dung làm encoder tính lại tiền tố giống nhau.",
    "mechanism": "Duy trì hash trạng thái tiền tố, invalidation theo điểm sửa và bộ nhớ đệm LRU.",
    "experiment": "Đo số phép tokenization tránh được trên lịch sử chỉnh sửa.",
    "steps": [
      "Xây tập văn bản thử nghiệm có train/dev/test tách biệt.",
      "Xây bộ mã hóa với nguyên tắc round-trip và phương án fallback.",
      "Huấn luyện từ vựng/chỉ mục trên cùng ngân sách dữ liệu.",
      "So sánh chất lượng, kích thước và chi phí suy luận hoặc truy xuất."
    ],
    "metrics": "token/câu, OOV, recall@k, MRR, RAM và thời gian encode/decode",
    "baseline": "Byte tokenizer, BPE/Unigram, vector index phổ biến",
    "risk": "Giảm số token không đồng nghĩa với cải thiện chất lượng mô hình; tránh rò rỉ dữ liệu thử nghiệm.",
    "stage": "Nền tảng"
  },
  {
    "id": 31,
    "slug": "gp-031",
    "name": "Vietnamese Micro-MoE",
    "category": 3,
    "problem": "Một TinyLM dense phải xử lý nhiều tác vụ trên cùng số tham số hạn chế.",
    "mechanism": "Tách expert theo nhóm tác vụ và dùng router nhỏ có giới hạn active parameters.",
    "experiment": "Đo accuracy và FLOPs so với dense cùng ngân sách.",
    "steps": [
      "Chọn một bài toán tiếng Việt có tiêu chí đánh giá công khai.",
      "Huấn luyện hoặc chưng cất mô hình trong ngân sách tham số và bộ nhớ xác định.",
      "Lượng tử hóa/định tuyến có đo chất lượng từng bước.",
      "Đánh giá trên CPU, ARM và phần cứng nhỏ với tập ngoài miền."
    ],
    "metrics": "độ chính xác tác vụ, kích thước mô hình, peak RAM, token/s, joule/token",
    "baseline": "Mô hình dense cùng kích thước, n-gram, mô hình lượng tử nhị phân",
    "risk": "Kiến trúc MoE lớn không thể thu nhỏ cơ học; cần kiểm tra giấy phép trọng số và dữ liệu teacher.",
    "stage": "Nguyên mẫu"
  },
  {
    "id": 32,
    "slug": "gp-032",
    "name": "Ternary-Aware TinyLLM",
    "category": 3,
    "problem": "TinyLLM vẫn cần dung lượng lưu trọng số và RAM đáng kể.",
    "mechanism": "Lượng tử trọng số về ba mức theo lớp, hiệu chỉnh activation và kernel bitpacked.",
    "experiment": "Đo perplexity, flash, RAM và joule/token trên CPU/ARM.",
    "steps": [
      "Chọn một bài toán tiếng Việt có tiêu chí đánh giá công khai.",
      "Huấn luyện hoặc chưng cất mô hình trong ngân sách tham số và bộ nhớ xác định.",
      "Lượng tử hóa/định tuyến có đo chất lượng từng bước.",
      "Đánh giá trên CPU, ARM và phần cứng nhỏ với tập ngoài miền."
    ],
    "metrics": "độ chính xác tác vụ, kích thước mô hình, peak RAM, token/s, joule/token",
    "baseline": "Mô hình dense cùng kích thước, n-gram, mô hình lượng tử nhị phân",
    "risk": "Kiến trúc MoE lớn không thể thu nhỏ cơ học; cần kiểm tra giấy phép trọng số và dữ liệu teacher.",
    "stage": "Nguyên mẫu"
  },
  {
    "id": 33,
    "slug": "gp-033",
    "name": "Teacher–Student Vietnamese Distillation",
    "category": 3,
    "problem": "Mô hình mạnh quá nặng để cài lên ESP32-S3 hoặc ARM nhỏ.",
    "mechanism": "Chưng cất teacher được cấp phép qua bộ dữ liệu câu hỏi, logits hoặc intermediate features.",
    "experiment": "Đánh giá đầu ra ngoài miền và so sánh với student huấn luyện độc lập.",
    "steps": [
      "Chọn một bài toán tiếng Việt có tiêu chí đánh giá công khai.",
      "Huấn luyện hoặc chưng cất mô hình trong ngân sách tham số và bộ nhớ xác định.",
      "Lượng tử hóa/định tuyến có đo chất lượng từng bước.",
      "Đánh giá trên CPU, ARM và phần cứng nhỏ với tập ngoài miền."
    ],
    "metrics": "độ chính xác tác vụ, kích thước mô hình, peak RAM, token/s, joule/token",
    "baseline": "Mô hình dense cùng kích thước, n-gram, mô hình lượng tử nhị phân",
    "risk": "Kiến trúc MoE lớn không thể thu nhỏ cơ học; cần kiểm tra giấy phép trọng số và dữ liệu teacher.",
    "stage": "Nguyên mẫu"
  },
  {
    "id": 34,
    "slug": "gp-034",
    "name": "Adaptive Expert Routing on ARM",
    "category": 3,
    "problem": "Router MoE không thích hợp nếu chi phí chọn expert vượt lợi ích.",
    "mechanism": "Kết hợp đặc trưng câu với trạng thái RAM và tải CPU để chọn expert cần chạy.",
    "experiment": "So sánh p95 latency và tiêu thụ điện với định tuyến cố định.",
    "steps": [
      "Chọn một bài toán tiếng Việt có tiêu chí đánh giá công khai.",
      "Huấn luyện hoặc chưng cất mô hình trong ngân sách tham số và bộ nhớ xác định.",
      "Lượng tử hóa/định tuyến có đo chất lượng từng bước.",
      "Đánh giá trên CPU, ARM và phần cứng nhỏ với tập ngoài miền."
    ],
    "metrics": "độ chính xác tác vụ, kích thước mô hình, peak RAM, token/s, joule/token",
    "baseline": "Mô hình dense cùng kích thước, n-gram, mô hình lượng tử nhị phân",
    "risk": "Kiến trúc MoE lớn không thể thu nhỏ cơ học; cần kiểm tra giấy phép trọng số và dữ liệu teacher.",
    "stage": "Nguyên mẫu"
  },
  {
    "id": 35,
    "slug": "gp-035",
    "name": "Constrained Speculative Decoder",
    "category": 3,
    "problem": "Sinh từng token nối tiếp gây trễ ở mô hình xác suất.",
    "mechanism": "Model nhỏ dự đoán nháp, bộ xác minh giữ tính đúng đắn phân phối hoặc ràng buộc tác vụ.",
    "experiment": "Đo token/s cùng tỷ lệ chấp nhận trên cùng model verifier.",
    "steps": [
      "Chọn một bài toán tiếng Việt có tiêu chí đánh giá công khai.",
      "Huấn luyện hoặc chưng cất mô hình trong ngân sách tham số và bộ nhớ xác định.",
      "Lượng tử hóa/định tuyến có đo chất lượng từng bước.",
      "Đánh giá trên CPU, ARM và phần cứng nhỏ với tập ngoài miền."
    ],
    "metrics": "độ chính xác tác vụ, kích thước mô hình, peak RAM, token/s, joule/token",
    "baseline": "Mô hình dense cùng kích thước, n-gram, mô hình lượng tử nhị phân",
    "risk": "Kiến trúc MoE lớn không thể thu nhỏ cơ học; cần kiểm tra giấy phép trọng số và dữ liệu teacher.",
    "stage": "Nguyên mẫu"
  },
  {
    "id": 36,
    "slug": "gp-036",
    "name": "TinyLLM Evidence-Bound RAG",
    "category": 3,
    "problem": "Mô hình nhỏ dễ trả lời sai khi không tìm được tài liệu phù hợp.",
    "mechanism": "Ràng buộc câu trả lời vào câu trích được truy xuất và kiểm tra trùng khớp nguồn.",
    "experiment": "Đo tỷ lệ hallucination và abstention trên bộ hỏi đáp có câu ngoài phạm vi.",
    "steps": [
      "Chọn một bài toán tiếng Việt có tiêu chí đánh giá công khai.",
      "Huấn luyện hoặc chưng cất mô hình trong ngân sách tham số và bộ nhớ xác định.",
      "Lượng tử hóa/định tuyến có đo chất lượng từng bước.",
      "Đánh giá trên CPU, ARM và phần cứng nhỏ với tập ngoài miền."
    ],
    "metrics": "độ chính xác tác vụ, kích thước mô hình, peak RAM, token/s, joule/token",
    "baseline": "Mô hình dense cùng kích thước, n-gram, mô hình lượng tử nhị phân",
    "risk": "Kiến trúc MoE lớn không thể thu nhỏ cơ học; cần kiểm tra giấy phép trọng số và dữ liệu teacher.",
    "stage": "Nguyên mẫu"
  },
  {
    "id": 37,
    "slug": "gp-037",
    "name": "Confidence-Calibrated TinyLM",
    "category": 3,
    "problem": "Điểm xác suất token chưa tương ứng mức chắc chắn của câu trả lời.",
    "mechanism": "Học lớp calibration bằng tập riêng, đặt ngưỡng từ chối có kiểm soát.",
    "experiment": "Vẽ reliability diagram, ECE và AUROC.",
    "steps": [
      "Chọn một bài toán tiếng Việt có tiêu chí đánh giá công khai.",
      "Huấn luyện hoặc chưng cất mô hình trong ngân sách tham số và bộ nhớ xác định.",
      "Lượng tử hóa/định tuyến có đo chất lượng từng bước.",
      "Đánh giá trên CPU, ARM và phần cứng nhỏ với tập ngoài miền."
    ],
    "metrics": "độ chính xác tác vụ, kích thước mô hình, peak RAM, token/s, joule/token",
    "baseline": "Mô hình dense cùng kích thước, n-gram, mô hình lượng tử nhị phân",
    "risk": "Kiến trúc MoE lớn không thể thu nhỏ cơ học; cần kiểm tra giấy phép trọng số và dữ liệu teacher.",
    "stage": "Nguyên mẫu"
  },
  {
    "id": 38,
    "slug": "gp-038",
    "name": "Hierarchical Context Memory",
    "category": 3,
    "problem": "Context giới hạn khiến thiết bị quên lịch sử cần thiết.",
    "mechanism": "Bộ nhớ ba tầng gồm cửa sổ hiện hành, bản tóm tắt đã xác minh và truy xuất cục bộ.",
    "experiment": "Đo độ đúng trên hội thoại dài và RAM đỉnh.",
    "steps": [
      "Chọn một bài toán tiếng Việt có tiêu chí đánh giá công khai.",
      "Huấn luyện hoặc chưng cất mô hình trong ngân sách tham số và bộ nhớ xác định.",
      "Lượng tử hóa/định tuyến có đo chất lượng từng bước.",
      "Đánh giá trên CPU, ARM và phần cứng nhỏ với tập ngoài miền."
    ],
    "metrics": "độ chính xác tác vụ, kích thước mô hình, peak RAM, token/s, joule/token",
    "baseline": "Mô hình dense cùng kích thước, n-gram, mô hình lượng tử nhị phân",
    "risk": "Kiến trúc MoE lớn không thể thu nhỏ cơ học; cần kiểm tra giấy phép trọng số và dữ liệu teacher.",
    "stage": "Nguyên mẫu"
  },
  {
    "id": 39,
    "slug": "gp-039",
    "name": "Dialect Robustness Distillation",
    "category": 3,
    "problem": "TinyLM giảm chất lượng với biến thể tiếng vùng miền và ASR nhiễu.",
    "mechanism": "Chưng cất trên cặp câu chuẩn/biến thể đã gắn nhãn với consistency loss.",
    "experiment": "Đo accuracy theo vùng và chênh lệch giữa các nhóm.",
    "steps": [
      "Chọn một bài toán tiếng Việt có tiêu chí đánh giá công khai.",
      "Huấn luyện hoặc chưng cất mô hình trong ngân sách tham số và bộ nhớ xác định.",
      "Lượng tử hóa/định tuyến có đo chất lượng từng bước.",
      "Đánh giá trên CPU, ARM và phần cứng nhỏ với tập ngoài miền."
    ],
    "metrics": "độ chính xác tác vụ, kích thước mô hình, peak RAM, token/s, joule/token",
    "baseline": "Mô hình dense cùng kích thước, n-gram, mô hình lượng tử nhị phân",
    "risk": "Kiến trúc MoE lớn không thể thu nhỏ cơ học; cần kiểm tra giấy phép trọng số và dữ liệu teacher.",
    "stage": "Nguyên mẫu"
  },
  {
    "id": 40,
    "slug": "gp-040",
    "name": "Energy-Aware LLM Scheduler",
    "category": 3,
    "problem": "Thiết bị chạy pin có ngân sách năng lượng thay đổi liên tục.",
    "mechanism": "Chọn độ dài đáp án, số lớp/expert hoặc mô hình dự phòng theo nhiệt và mức pin.",
    "experiment": "Đo thời lượng pin và chất lượng hoàn thành nhiệm vụ.",
    "steps": [
      "Chọn một bài toán tiếng Việt có tiêu chí đánh giá công khai.",
      "Huấn luyện hoặc chưng cất mô hình trong ngân sách tham số và bộ nhớ xác định.",
      "Lượng tử hóa/định tuyến có đo chất lượng từng bước.",
      "Đánh giá trên CPU, ARM và phần cứng nhỏ với tập ngoài miền."
    ],
    "metrics": "độ chính xác tác vụ, kích thước mô hình, peak RAM, token/s, joule/token",
    "baseline": "Mô hình dense cùng kích thước, n-gram, mô hình lượng tử nhị phân",
    "risk": "Kiến trúc MoE lớn không thể thu nhỏ cơ học; cần kiểm tra giấy phép trọng số và dữ liệu teacher.",
    "stage": "Nguyên mẫu"
  },
  {
    "id": 41,
    "slug": "gp-041",
    "name": "BilaScript Vietnamese Semantic Compiler",
    "category": 4,
    "problem": "Ngôn ngữ tự nhiên mơ hồ không thể trực tiếp điều khiển thiết bị.",
    "mechanism": "Dịch câu trong miền ràng buộc sang AST và Typed Task IR; thiếu tham số phải từ chối.",
    "experiment": "Kiểm thử 1000 lệnh, tỷ lệ parse đúng và từ chối an toàn.",
    "steps": [
      "Đặc tả ngữ pháp, ngữ nghĩa, kiểu dữ liệu và hành động hợp lệ.",
      "Xây AST, typed IR, bộ kiểm tra tĩnh và code generator.",
      "Kiểm tra tính tương đương giữa mã nguồn, IR và mã đích.",
      "Tổng hợp/mô phỏng mạch hoặc thực thi trên thiết bị để đo hiệu năng."
    ],
    "metrics": "test pass rate, lỗi phát hiện sớm, LUT/FF, timing, thời gian biên dịch",
    "baseline": "VHDL/C thủ công, trình thông dịch thông thường, DSL điều khiển hiện có",
    "risk": "Không khẳng định chứng minh hình thức khi chỉ có unit test; nêu rõ lớp thuộc tính được kiểm chứng.",
    "stage": "Nguyên mẫu"
  },
  {
    "id": 42,
    "slug": "gp-042",
    "name": "Safety-Typed BilaScript",
    "category": 4,
    "problem": "Chương trình nhúng dễ bỏ qua giới hạn hành động và quyền truy cập.",
    "mechanism": "Hệ kiểu gắn thiết bị, phạm vi, quyền và tiền điều kiện vào lệnh BilaScript.",
    "experiment": "Đo số vi phạm bắt được trước chạy trên bộ chương trình cố tình sai.",
    "steps": [
      "Đặc tả ngữ pháp, ngữ nghĩa, kiểu dữ liệu và hành động hợp lệ.",
      "Xây AST, typed IR, bộ kiểm tra tĩnh và code generator.",
      "Kiểm tra tính tương đương giữa mã nguồn, IR và mã đích.",
      "Tổng hợp/mô phỏng mạch hoặc thực thi trên thiết bị để đo hiệu năng."
    ],
    "metrics": "test pass rate, lỗi phát hiện sớm, LUT/FF, timing, thời gian biên dịch",
    "baseline": "VHDL/C thủ công, trình thông dịch thông thường, DSL điều khiển hiện có",
    "risk": "Không khẳng định chứng minh hình thức khi chỉ có unit test; nêu rõ lớp thuộc tính được kiểm chứng.",
    "stage": "Nguyên mẫu"
  },
  {
    "id": 43,
    "slug": "gp-043",
    "name": "Native Ternary BilaScript Syntax",
    "category": 4,
    "problem": "Lập trình trit không có ngữ nghĩa rõ ở tầng ngôn ngữ.",
    "mechanism": "Bổ sung type trit, literal -1/0/+1, operator và quy tắc chuyển kiểu tường minh.",
    "experiment": "Kiểm tra bảng chân trị và tính nhất quán giữa interpreter và compiler.",
    "steps": [
      "Đặc tả ngữ pháp, ngữ nghĩa, kiểu dữ liệu và hành động hợp lệ.",
      "Xây AST, typed IR, bộ kiểm tra tĩnh và code generator.",
      "Kiểm tra tính tương đương giữa mã nguồn, IR và mã đích.",
      "Tổng hợp/mô phỏng mạch hoặc thực thi trên thiết bị để đo hiệu năng."
    ],
    "metrics": "test pass rate, lỗi phát hiện sớm, LUT/FF, timing, thời gian biên dịch",
    "baseline": "VHDL/C thủ công, trình thông dịch thông thường, DSL điều khiển hiện có",
    "risk": "Không khẳng định chứng minh hình thức khi chỉ có unit test; nêu rõ lớp thuộc tính được kiểm chứng.",
    "stage": "Nguyên mẫu"
  },
  {
    "id": 44,
    "slug": "gp-044",
    "name": "BilaScript Ahead-of-Time Compiler",
    "category": 4,
    "problem": "Trình thông dịch làm tăng RAM và thời gian khởi động firmware.",
    "mechanism": "Biên dịch ahead-of-time từ AST sang bytecode tĩnh hoặc C/ASM đích.",
    "experiment": "So sánh thời gian khởi động, firmware size và throughput.",
    "steps": [
      "Đặc tả ngữ pháp, ngữ nghĩa, kiểu dữ liệu và hành động hợp lệ.",
      "Xây AST, typed IR, bộ kiểm tra tĩnh và code generator.",
      "Kiểm tra tính tương đương giữa mã nguồn, IR và mã đích.",
      "Tổng hợp/mô phỏng mạch hoặc thực thi trên thiết bị để đo hiệu năng."
    ],
    "metrics": "test pass rate, lỗi phát hiện sớm, LUT/FF, timing, thời gian biên dịch",
    "baseline": "VHDL/C thủ công, trình thông dịch thông thường, DSL điều khiển hiện có",
    "risk": "Không khẳng định chứng minh hình thức khi chỉ có unit test; nêu rõ lớp thuộc tính được kiểm chứng.",
    "stage": "Nguyên mẫu"
  },
  {
    "id": 45,
    "slug": "gp-045",
    "name": "BilaScript-to-NHDL Hardware Compiler",
    "category": 4,
    "problem": "Không có lộ trình trực tiếp từ DSL tam phân đến mạch FPGA.",
    "mechanism": "Sinh Typed IR, kiểm chứng ràng buộc rồi lower phép toán trit sang NHDL/VHDL-2008.",
    "experiment": "So sánh RTL sinh tự động với RTL thủ công cùng chức năng.",
    "steps": [
      "Đặc tả ngữ pháp, ngữ nghĩa, kiểu dữ liệu và hành động hợp lệ.",
      "Xây AST, typed IR, bộ kiểm tra tĩnh và code generator.",
      "Kiểm tra tính tương đương giữa mã nguồn, IR và mã đích.",
      "Tổng hợp/mô phỏng mạch hoặc thực thi trên thiết bị để đo hiệu năng."
    ],
    "metrics": "test pass rate, lỗi phát hiện sớm, LUT/FF, timing, thời gian biên dịch",
    "baseline": "VHDL/C thủ công, trình thông dịch thông thường, DSL điều khiển hiện có",
    "risk": "Không khẳng định chứng minh hình thức khi chỉ có unit test; nêu rõ lớp thuộc tính được kiểm chứng.",
    "stage": "Nguyên mẫu"
  },
  {
    "id": 46,
    "slug": "gp-046",
    "name": "Static Energy Cost Analyzer",
    "category": 4,
    "problem": "Lập trình viên khó biết chi phí năng lượng của thuật toán trước triển khai.",
    "mechanism": "Gán cost model cho opcode, loop bound và ngoại vi để ước lượng ngân sách.",
    "experiment": "So sánh ước lượng với số đo công suất thực tế trên MCU.",
    "steps": [
      "Đặc tả ngữ pháp, ngữ nghĩa, kiểu dữ liệu và hành động hợp lệ.",
      "Xây AST, typed IR, bộ kiểm tra tĩnh và code generator.",
      "Kiểm tra tính tương đương giữa mã nguồn, IR và mã đích.",
      "Tổng hợp/mô phỏng mạch hoặc thực thi trên thiết bị để đo hiệu năng."
    ],
    "metrics": "test pass rate, lỗi phát hiện sớm, LUT/FF, timing, thời gian biên dịch",
    "baseline": "VHDL/C thủ công, trình thông dịch thông thường, DSL điều khiển hiện có",
    "risk": "Không khẳng định chứng minh hình thức khi chỉ có unit test; nêu rõ lớp thuộc tính được kiểm chứng.",
    "stage": "Nguyên mẫu"
  },
  {
    "id": 47,
    "slug": "gp-047",
    "name": "Ternary-Aware Compiler Optimizer",
    "category": 4,
    "problem": "Trình tối ưu truyền thống thiếu rewrite rule cho đại số tam phân.",
    "mechanism": "Xây bộ rewrite có chứng minh tương đương và ánh xạ instruction phù hợp.",
    "experiment": "Đo số phép toán, critical path và tính đúng sau tối ưu.",
    "steps": [
      "Đặc tả ngữ pháp, ngữ nghĩa, kiểu dữ liệu và hành động hợp lệ.",
      "Xây AST, typed IR, bộ kiểm tra tĩnh và code generator.",
      "Kiểm tra tính tương đương giữa mã nguồn, IR và mã đích.",
      "Tổng hợp/mô phỏng mạch hoặc thực thi trên thiết bị để đo hiệu năng."
    ],
    "metrics": "test pass rate, lỗi phát hiện sớm, LUT/FF, timing, thời gian biên dịch",
    "baseline": "VHDL/C thủ công, trình thông dịch thông thường, DSL điều khiển hiện có",
    "risk": "Không khẳng định chứng minh hình thức khi chỉ có unit test; nêu rõ lớp thuộc tính được kiểm chứng.",
    "stage": "Nguyên mẫu"
  },
  {
    "id": 48,
    "slug": "gp-048",
    "name": "Temporal Safety Type System",
    "category": 4,
    "problem": "Lệnh có thể hợp lệ về kiểu nhưng nguy hiểm vì quá hạn hoặc sai thứ tự.",
    "mechanism": "Bổ sung constraint deadline, timeout và protocol-state vào type checker.",
    "experiment": "Tạo ca lỗi thứ tự và deadline; đo tỷ lệ bắt lỗi sớm.",
    "steps": [
      "Đặc tả ngữ pháp, ngữ nghĩa, kiểu dữ liệu và hành động hợp lệ.",
      "Xây AST, typed IR, bộ kiểm tra tĩnh và code generator.",
      "Kiểm tra tính tương đương giữa mã nguồn, IR và mã đích.",
      "Tổng hợp/mô phỏng mạch hoặc thực thi trên thiết bị để đo hiệu năng."
    ],
    "metrics": "test pass rate, lỗi phát hiện sớm, LUT/FF, timing, thời gian biên dịch",
    "baseline": "VHDL/C thủ công, trình thông dịch thông thường, DSL điều khiển hiện có",
    "risk": "Không khẳng định chứng minh hình thức khi chỉ có unit test; nêu rõ lớp thuộc tính được kiểm chứng.",
    "stage": "Nguyên mẫu"
  },
  {
    "id": 49,
    "slug": "gp-049",
    "name": "Reversible Execution Trace",
    "category": 4,
    "problem": "Khó tái hiện lỗi khi chương trình điều khiển thay đổi trạng thái nhanh.",
    "mechanism": "Ghi event log và snapshot định kỳ đủ để chạy lại biểu diễn trung gian.",
    "experiment": "Kiểm tra replay determinism và overhead bộ nhớ.",
    "steps": [
      "Đặc tả ngữ pháp, ngữ nghĩa, kiểu dữ liệu và hành động hợp lệ.",
      "Xây AST, typed IR, bộ kiểm tra tĩnh và code generator.",
      "Kiểm tra tính tương đương giữa mã nguồn, IR và mã đích.",
      "Tổng hợp/mô phỏng mạch hoặc thực thi trên thiết bị để đo hiệu năng."
    ],
    "metrics": "test pass rate, lỗi phát hiện sớm, LUT/FF, timing, thời gian biên dịch",
    "baseline": "VHDL/C thủ công, trình thông dịch thông thường, DSL điều khiển hiện có",
    "risk": "Không khẳng định chứng minh hình thức khi chỉ có unit test; nêu rõ lớp thuộc tính được kiểm chứng.",
    "stage": "Nguyên mẫu"
  },
  {
    "id": 50,
    "slug": "gp-050",
    "name": "Formal Verification for Vietnamese DSL",
    "category": 4,
    "problem": "Unit test không thể bao phủ toàn bộ chuỗi chuyển trạng thái.",
    "mechanism": "Sinh proof obligation từ invariant và tiền/hậu điều kiện, kết nối SMT/SAT solver.",
    "experiment": "Thử trên tập thuộc tính có mô hình phản ví dụ đã biết.",
    "steps": [
      "Đặc tả ngữ pháp, ngữ nghĩa, kiểu dữ liệu và hành động hợp lệ.",
      "Xây AST, typed IR, bộ kiểm tra tĩnh và code generator.",
      "Kiểm tra tính tương đương giữa mã nguồn, IR và mã đích.",
      "Tổng hợp/mô phỏng mạch hoặc thực thi trên thiết bị để đo hiệu năng."
    ],
    "metrics": "test pass rate, lỗi phát hiện sớm, LUT/FF, timing, thời gian biên dịch",
    "baseline": "VHDL/C thủ công, trình thông dịch thông thường, DSL điều khiển hiện có",
    "risk": "Không khẳng định chứng minh hình thức khi chỉ có unit test; nêu rõ lớp thuộc tính được kiểm chứng.",
    "stage": "Nguyên mẫu"
  },
  {
    "id": 51,
    "slug": "gp-051",
    "name": "Dual-Path Vietnamese Speech-to-Action",
    "category": 5,
    "problem": "ASR và ánh xạ lệnh từng bước gây trễ hoặc sai trong môi trường nhiễu.",
    "mechanism": "Ghép pipeline ASR→Task IR với mô hình âm thanh→Action, dùng bộ hòa giải theo độ tin cậy.",
    "experiment": "Đo task success, latency và lỗi hành động trên tiếng ồn thực.",
    "steps": [
      "Định nghĩa Typed Task IR và trạng thái an toàn có thể kiểm tra.",
      "Kết nối ASR, nhận thức môi trường, grounding và thư viện skill.",
      "Thử nghiệm trong ROS 2 mô phỏng với tình huống lỗi/khẩn cấp.",
      "Chạy trên robot thật dưới giám sát, đo độ trễ và tỷ lệ dừng an toàn."
    ],
    "metrics": "task success, grounding accuracy, p95 latency, unsafe-action rate, recovery time",
    "baseline": "Pipeline ASR→rule-based action, ROS 2 skill controller chuẩn",
    "risk": "Không dùng đầu ra LLM làm lệnh động cơ trực tiếp; an toàn phải được bảo vệ độc lập.",
    "stage": "Nguyên mẫu"
  },
  {
    "id": 52,
    "slug": "gp-052",
    "name": "Real-Time Neural–Symbolic Scheduler",
    "category": 5,
    "problem": "LLM không có bảo đảm thời gian thực cho bộ điều khiển động cơ.",
    "mechanism": "Tách slow planner và fast controller, liên lạc qua hàng đợi typed action giới hạn.",
    "experiment": "Đánh giá jitter, missed deadline và ứng xử khi planner treo.",
    "steps": [
      "Định nghĩa Typed Task IR và trạng thái an toàn có thể kiểm tra.",
      "Kết nối ASR, nhận thức môi trường, grounding và thư viện skill.",
      "Thử nghiệm trong ROS 2 mô phỏng với tình huống lỗi/khẩn cấp.",
      "Chạy trên robot thật dưới giám sát, đo độ trễ và tỷ lệ dừng an toàn."
    ],
    "metrics": "task success, grounding accuracy, p95 latency, unsafe-action rate, recovery time",
    "baseline": "Pipeline ASR→rule-based action, ROS 2 skill controller chuẩn",
    "risk": "Không dùng đầu ra LLM làm lệnh động cơ trực tiếp; an toàn phải được bảo vệ độc lập.",
    "stage": "Nguyên mẫu"
  },
  {
    "id": 53,
    "slug": "gp-053",
    "name": "Hardware Fail-Closed Safety Gate",
    "category": 5,
    "problem": "Lỗi phần mềm có thể khiến cơ cấu chấp hành tiếp tục hoạt động nguy hiểm.",
    "mechanism": "Thiết kế đường khóa độc lập giám sát watchdog, interlock và điều kiện cho phép.",
    "experiment": "Thử mất nguồn, mất tín hiệu và lệnh trái điều kiện.",
    "steps": [
      "Định nghĩa Typed Task IR và trạng thái an toàn có thể kiểm tra.",
      "Kết nối ASR, nhận thức môi trường, grounding và thư viện skill.",
      "Thử nghiệm trong ROS 2 mô phỏng với tình huống lỗi/khẩn cấp.",
      "Chạy trên robot thật dưới giám sát, đo độ trễ và tỷ lệ dừng an toàn."
    ],
    "metrics": "task success, grounding accuracy, p95 latency, unsafe-action rate, recovery time",
    "baseline": "Pipeline ASR→rule-based action, ROS 2 skill controller chuẩn",
    "risk": "Không dùng đầu ra LLM làm lệnh động cơ trực tiếp; an toàn phải được bảo vệ độc lập.",
    "stage": "Nguyên mẫu"
  },
  {
    "id": 54,
    "slug": "gp-054",
    "name": "Grounded Vietnamese Object Referencing",
    "category": 5,
    "problem": "Lệnh chỉ vật thể như 'cái bên trái' thiếu đối tượng tham chiếu cố định.",
    "mechanism": "Gắn phrase vào đối tượng cảm biến với ID, pose, thời hạn hiệu lực và vùng kiểm chứng.",
    "experiment": "Đo grounding accuracy khi nhiều vật giống nhau và che khuất.",
    "steps": [
      "Định nghĩa Typed Task IR và trạng thái an toàn có thể kiểm tra.",
      "Kết nối ASR, nhận thức môi trường, grounding và thư viện skill.",
      "Thử nghiệm trong ROS 2 mô phỏng với tình huống lỗi/khẩn cấp.",
      "Chạy trên robot thật dưới giám sát, đo độ trễ và tỷ lệ dừng an toàn."
    ],
    "metrics": "task success, grounding accuracy, p95 latency, unsafe-action rate, recovery time",
    "baseline": "Pipeline ASR→rule-based action, ROS 2 skill controller chuẩn",
    "risk": "Không dùng đầu ra LLM làm lệnh động cơ trực tiếp; an toàn phải được bảo vệ độc lập.",
    "stage": "Nguyên mẫu"
  },
  {
    "id": 55,
    "slug": "gp-055",
    "name": "Audio–Vision Temporal Grounding",
    "category": 5,
    "problem": "Độ trễ giữa lời nói và hình ảnh gây chọn nhầm vật thể.",
    "mechanism": "Đồng bộ timestamp ASR và frame, giữ giả thuyết đối tượng theo thời gian.",
    "experiment": "Đo sai lệch thời gian tối đa cho phép và lỗi tham chiếu.",
    "steps": [
      "Định nghĩa Typed Task IR và trạng thái an toàn có thể kiểm tra.",
      "Kết nối ASR, nhận thức môi trường, grounding và thư viện skill.",
      "Thử nghiệm trong ROS 2 mô phỏng với tình huống lỗi/khẩn cấp.",
      "Chạy trên robot thật dưới giám sát, đo độ trễ và tỷ lệ dừng an toàn."
    ],
    "metrics": "task success, grounding accuracy, p95 latency, unsafe-action rate, recovery time",
    "baseline": "Pipeline ASR→rule-based action, ROS 2 skill controller chuẩn",
    "risk": "Không dùng đầu ra LLM làm lệnh động cơ trực tiếp; an toàn phải được bảo vệ độc lập.",
    "stage": "Nguyên mẫu"
  },
  {
    "id": 56,
    "slug": "gp-056",
    "name": "Affordance-Aware Action Compiler",
    "category": 5,
    "problem": "Lệnh hợp cú pháp vẫn có thể vượt tải hoặc không thực thi được.",
    "mechanism": "Kiểm tra tải trọng, khoảng với, precondition và năng lực skill trước khi sinh action.",
    "experiment": "Thử lệnh bất khả thi và đo tỷ lệ từ chối đúng.",
    "steps": [
      "Định nghĩa Typed Task IR và trạng thái an toàn có thể kiểm tra.",
      "Kết nối ASR, nhận thức môi trường, grounding và thư viện skill.",
      "Thử nghiệm trong ROS 2 mô phỏng với tình huống lỗi/khẩn cấp.",
      "Chạy trên robot thật dưới giám sát, đo độ trễ và tỷ lệ dừng an toàn."
    ],
    "metrics": "task success, grounding accuracy, p95 latency, unsafe-action rate, recovery time",
    "baseline": "Pipeline ASR→rule-based action, ROS 2 skill controller chuẩn",
    "risk": "Không dùng đầu ra LLM làm lệnh động cơ trực tiếp; an toàn phải được bảo vệ độc lập.",
    "stage": "Nguyên mẫu"
  },
  {
    "id": 57,
    "slug": "gp-057",
    "name": "Transactional Robot Skill Executor",
    "category": 5,
    "problem": "Chuỗi kỹ năng bị lỗi giữa chừng gây trạng thái thiết bị khó phục hồi.",
    "mechanism": "Thực thi skill theo phase prepare/commit/verify và dừng có kiểm soát khi thất bại.",
    "experiment": "Đo recovery time, số trạng thái mồ côi, task success.",
    "steps": [
      "Định nghĩa Typed Task IR và trạng thái an toàn có thể kiểm tra.",
      "Kết nối ASR, nhận thức môi trường, grounding và thư viện skill.",
      "Thử nghiệm trong ROS 2 mô phỏng với tình huống lỗi/khẩn cấp.",
      "Chạy trên robot thật dưới giám sát, đo độ trễ và tỷ lệ dừng an toàn."
    ],
    "metrics": "task success, grounding accuracy, p95 latency, unsafe-action rate, recovery time",
    "baseline": "Pipeline ASR→rule-based action, ROS 2 skill controller chuẩn",
    "risk": "Không dùng đầu ra LLM làm lệnh động cơ trực tiếp; an toàn phải được bảo vệ độc lập.",
    "stage": "Nguyên mẫu"
  },
  {
    "id": 58,
    "slug": "gp-058",
    "name": "Sim-to-Real Ternary Controller",
    "category": 5,
    "problem": "Bộ điều khiển lượng tử hóa có thể mất ổn định khi chuyển từ sim sang thực.",
    "mechanism": "Hiệu chỉnh mức trit và tham số an toàn bằng dữ liệu mô phỏng và miền nhiễu thực.",
    "experiment": "Đo tracking error và độ ổn định với tải thay đổi.",
    "steps": [
      "Định nghĩa Typed Task IR và trạng thái an toàn có thể kiểm tra.",
      "Kết nối ASR, nhận thức môi trường, grounding và thư viện skill.",
      "Thử nghiệm trong ROS 2 mô phỏng với tình huống lỗi/khẩn cấp.",
      "Chạy trên robot thật dưới giám sát, đo độ trễ và tỷ lệ dừng an toàn."
    ],
    "metrics": "task success, grounding accuracy, p95 latency, unsafe-action rate, recovery time",
    "baseline": "Pipeline ASR→rule-based action, ROS 2 skill controller chuẩn",
    "risk": "Không dùng đầu ra LLM làm lệnh động cơ trực tiếp; an toàn phải được bảo vệ độc lập.",
    "stage": "Nguyên mẫu"
  },
  {
    "id": 59,
    "slug": "gp-059",
    "name": "Adversarial Vietnamese Voice Test Bench",
    "category": 5,
    "problem": "Hệ thống giọng nói thiếu bộ kiểm thử lỗi nguy hiểm có thể lặp lại.",
    "mechanism": "Sinh tập lệnh mơ hồ, nhiễu môi trường, nói chồng và replay cho kiểm tra đầu-cuối.",
    "experiment": "Đo unsafe-action rate cùng tỷ lệ dừng hợp lệ.",
    "steps": [
      "Định nghĩa Typed Task IR và trạng thái an toàn có thể kiểm tra.",
      "Kết nối ASR, nhận thức môi trường, grounding và thư viện skill.",
      "Thử nghiệm trong ROS 2 mô phỏng với tình huống lỗi/khẩn cấp.",
      "Chạy trên robot thật dưới giám sát, đo độ trễ và tỷ lệ dừng an toàn."
    ],
    "metrics": "task success, grounding accuracy, p95 latency, unsafe-action rate, recovery time",
    "baseline": "Pipeline ASR→rule-based action, ROS 2 skill controller chuẩn",
    "risk": "Không dùng đầu ra LLM làm lệnh động cơ trực tiếp; an toàn phải được bảo vệ độc lập.",
    "stage": "Nguyên mẫu"
  },
  {
    "id": 60,
    "slug": "gp-060",
    "name": "Low-Bandwidth Voice Command Protocol",
    "category": 5,
    "problem": "Truyền toàn bộ bản ghi âm gây tốn băng thông khi chỉ cần ý định thao tác.",
    "mechanism": "Nén lệnh sang Task IR phiên bản hóa có sequence, checksum và token xác thực.",
    "experiment": "Đo bytes/lệnh và khả năng chống trùng/replay.",
    "steps": [
      "Định nghĩa Typed Task IR và trạng thái an toàn có thể kiểm tra.",
      "Kết nối ASR, nhận thức môi trường, grounding và thư viện skill.",
      "Thử nghiệm trong ROS 2 mô phỏng với tình huống lỗi/khẩn cấp.",
      "Chạy trên robot thật dưới giám sát, đo độ trễ và tỷ lệ dừng an toàn."
    ],
    "metrics": "task success, grounding accuracy, p95 latency, unsafe-action rate, recovery time",
    "baseline": "Pipeline ASR→rule-based action, ROS 2 skill controller chuẩn",
    "risk": "Không dùng đầu ra LLM làm lệnh động cơ trực tiếp; an toàn phải được bảo vệ độc lập.",
    "stage": "Nguyên mẫu"
  },
  {
    "id": 61,
    "slug": "gp-061",
    "name": "Always-On Vietnamese Wake-Word Accelerator",
    "category": 6,
    "problem": "Mở ASR liên tục làm tốn pin trên thiết bị nhỏ.",
    "mechanism": "Dùng KWS nhỏ theo cửa sổ âm thanh, đánh thức mô hình lớn theo ngưỡng hai cấp.",
    "experiment": "Đo false wake/hour và joule/giờ trên MCU.",
    "steps": [
      "Thiết lập thông số môi trường, công suất và điều kiện vận hành.",
      "Thiết kế nguyên mẫu RF, cảm biến hoặc quản trị năng lượng.",
      "Đo trong phòng thí nghiệm với cùng điều kiện đối chứng.",
      "Thử nghiệm ngoại trường, mô hình hóa nhiễu và phân tích tuổi thọ."
    ],
    "metrics": "joule/event, battery life, read range, BER/PER, latency, BOM",
    "baseline": "Gateway LoRaWAN, đầu đọc RFID, scheduler nhúng hoặc mạch quản trị nguồn thông dụng",
    "risk": "Phải tuân thủ quy định tần số vô tuyến, EMC và an toàn điện; không suy ra quyền dùng sáng chế Tesla.",
    "stage": "Hệ thống"
  },
  {
    "id": 62,
    "slug": "gp-062",
    "name": "Supercapacitor-Assisted Edge AI",
    "category": 6,
    "problem": "Các đợt truyền RF và suy luận gây sụt áp từ pin yếu.",
    "mechanism": "Bố trí siêu tụ phụ trợ với mạch giới hạn dòng và lịch chạy tránh xung tải chồng.",
    "experiment": "Đo voltage dip, số lần reset và tuổi thọ pin mô phỏng.",
    "steps": [
      "Thiết lập thông số môi trường, công suất và điều kiện vận hành.",
      "Thiết kế nguyên mẫu RF, cảm biến hoặc quản trị năng lượng.",
      "Đo trong phòng thí nghiệm với cùng điều kiện đối chứng.",
      "Thử nghiệm ngoại trường, mô hình hóa nhiễu và phân tích tuổi thọ."
    ],
    "metrics": "joule/event, battery life, read range, BER/PER, latency, BOM",
    "baseline": "Gateway LoRaWAN, đầu đọc RFID, scheduler nhúng hoặc mạch quản trị nguồn thông dụng",
    "risk": "Phải tuân thủ quy định tần số vô tuyến, EMC và an toàn điện; không suy ra quyền dùng sáng chế Tesla.",
    "stage": "Hệ thống"
  },
  {
    "id": 63,
    "slug": "gp-063",
    "name": "Thermal-Aware Edge Intelligence",
    "category": 6,
    "problem": "MCU/SoC nóng làm giảm hiệu năng hoặc vượt giới hạn thiết bị.",
    "mechanism": "Điều khiển tần số và nhịp suy luận theo cảm biến nhiệt và workload dự báo.",
    "experiment": "Đo nhiệt độ đỉnh và throughput bền vững.",
    "steps": [
      "Thiết lập thông số môi trường, công suất và điều kiện vận hành.",
      "Thiết kế nguyên mẫu RF, cảm biến hoặc quản trị năng lượng.",
      "Đo trong phòng thí nghiệm với cùng điều kiện đối chứng.",
      "Thử nghiệm ngoại trường, mô hình hóa nhiễu và phân tích tuổi thọ."
    ],
    "metrics": "joule/event, battery life, read range, BER/PER, latency, BOM",
    "baseline": "Gateway LoRaWAN, đầu đọc RFID, scheduler nhúng hoặc mạch quản trị nguồn thông dụng",
    "risk": "Phải tuân thủ quy định tần số vô tuyến, EMC và an toàn điện; không suy ra quyền dùng sáng chế Tesla.",
    "stage": "Hệ thống"
  },
  {
    "id": 64,
    "slug": "gp-064",
    "name": "Solar-Powered Adaptive AI Node",
    "category": 6,
    "problem": "Năng lượng mặt trời biến động theo thời tiết và mùa.",
    "mechanism": "Thay đổi duty-cycle sensing/inference theo dung lượng dự trữ và năng lượng thu thực tế.",
    "experiment": "Thử profile nắng nhiều ngày, đo tỷ lệ nhiệm vụ hoàn thành.",
    "steps": [
      "Thiết lập thông số môi trường, công suất và điều kiện vận hành.",
      "Thiết kế nguyên mẫu RF, cảm biến hoặc quản trị năng lượng.",
      "Đo trong phòng thí nghiệm với cùng điều kiện đối chứng.",
      "Thử nghiệm ngoại trường, mô hình hóa nhiễu và phân tích tuổi thọ."
    ],
    "metrics": "joule/event, battery life, read range, BER/PER, latency, BOM",
    "baseline": "Gateway LoRaWAN, đầu đọc RFID, scheduler nhúng hoặc mạch quản trị nguồn thông dụng",
    "risk": "Phải tuân thủ quy định tần số vô tuyến, EMC và an toàn điện; không suy ra quyền dùng sáng chế Tesla.",
    "stage": "Hệ thống"
  },
  {
    "id": 65,
    "slug": "gp-065",
    "name": "Energy-Optimized LoRa Telemetry",
    "category": 6,
    "problem": "Nút cảm biến truyền gói dữ liệu lặp lại gây lãng phí airtime.",
    "mechanism": "Kết hợp delta-event encoding, batching và chính sách xác nhận gói tùy ưu tiên.",
    "experiment": "Đo joule/bản tin hữu ích và packet delivery ratio.",
    "steps": [
      "Thiết lập thông số môi trường, công suất và điều kiện vận hành.",
      "Thiết kế nguyên mẫu RF, cảm biến hoặc quản trị năng lượng.",
      "Đo trong phòng thí nghiệm với cùng điều kiện đối chứng.",
      "Thử nghiệm ngoại trường, mô hình hóa nhiễu và phân tích tuổi thọ."
    ],
    "metrics": "joule/event, battery life, read range, BER/PER, latency, BOM",
    "baseline": "Gateway LoRaWAN, đầu đọc RFID, scheduler nhúng hoặc mạch quản trị nguồn thông dụng",
    "risk": "Phải tuân thủ quy định tần số vô tuyến, EMC và an toàn điện; không suy ra quyền dùng sáng chế Tesla.",
    "stage": "Hệ thống"
  },
  {
    "id": 66,
    "slug": "gp-066",
    "name": "Ternary-Coded Chipless RFID Tag",
    "category": 6,
    "problem": "Số trạng thái phân biệt được trên thẻ RFID không chip bị giới hạn bởi nhiễu.",
    "mechanism": "Thiết kế cộng hưởng đa mức với mã trit và hiệu chỉnh theo tần số/biên độ/pha.",
    "experiment": "Đo confusion matrix theo khoảng cách, độ ẩm và hướng thẻ.",
    "steps": [
      "Thiết lập thông số môi trường, công suất và điều kiện vận hành.",
      "Thiết kế nguyên mẫu RF, cảm biến hoặc quản trị năng lượng.",
      "Đo trong phòng thí nghiệm với cùng điều kiện đối chứng.",
      "Thử nghiệm ngoại trường, mô hình hóa nhiễu và phân tích tuổi thọ."
    ],
    "metrics": "joule/event, battery life, read range, BER/PER, latency, BOM",
    "baseline": "Gateway LoRaWAN, đầu đọc RFID, scheduler nhúng hoặc mạch quản trị nguồn thông dụng",
    "risk": "Phải tuân thủ quy định tần số vô tuyến, EMC và an toàn điện; không suy ra quyền dùng sáng chế Tesla.",
    "stage": "Hệ thống"
  },
  {
    "id": 67,
    "slug": "gp-067",
    "name": "Interference-Resilient Chipless Reader",
    "category": 6,
    "problem": "Phản xạ đa đường làm phổ thẻ bị biến dạng và sai định danh.",
    "mechanism": "Đầu đọc SDR đo nền, triệt nhiễu và giải mã theo xác suất/chỉ dấu chất lượng.",
    "experiment": "Đo read accuracy tại nhiều mức SNR.",
    "steps": [
      "Thiết lập thông số môi trường, công suất và điều kiện vận hành.",
      "Thiết kế nguyên mẫu RF, cảm biến hoặc quản trị năng lượng.",
      "Đo trong phòng thí nghiệm với cùng điều kiện đối chứng.",
      "Thử nghiệm ngoại trường, mô hình hóa nhiễu và phân tích tuổi thọ."
    ],
    "metrics": "joule/event, battery life, read range, BER/PER, latency, BOM",
    "baseline": "Gateway LoRaWAN, đầu đọc RFID, scheduler nhúng hoặc mạch quản trị nguồn thông dụng",
    "risk": "Phải tuân thủ quy định tần số vô tuyến, EMC và an toàn điện; không suy ra quyền dùng sáng chế Tesla.",
    "stage": "Hệ thống"
  },
  {
    "id": 68,
    "slug": "gp-068",
    "name": "Base27 LoRaWAN RFID Gateway",
    "category": 6,
    "problem": "ID chipless cần truyền qua mạng có tải bản tin hạn chế.",
    "mechanism": "Tạo gateway nhận kết quả đầu đọc, đóng gói ID Base27 và metadata kiểm tra.",
    "experiment": "Đo payload bytes, delivery ratio và năng lượng toàn tuyến.",
    "steps": [
      "Thiết lập thông số môi trường, công suất và điều kiện vận hành.",
      "Thiết kế nguyên mẫu RF, cảm biến hoặc quản trị năng lượng.",
      "Đo trong phòng thí nghiệm với cùng điều kiện đối chứng.",
      "Thử nghiệm ngoại trường, mô hình hóa nhiễu và phân tích tuổi thọ."
    ],
    "metrics": "joule/event, battery life, read range, BER/PER, latency, BOM",
    "baseline": "Gateway LoRaWAN, đầu đọc RFID, scheduler nhúng hoặc mạch quản trị nguồn thông dụng",
    "risk": "Phải tuân thủ quy định tần số vô tuyến, EMC và an toàn điện; không suy ra quyền dùng sáng chế Tesla.",
    "stage": "Hệ thống"
  },
  {
    "id": 69,
    "slug": "gp-069",
    "name": "Fail-Safe Energy-Aware OTA",
    "category": 6,
    "problem": "Mất điện trong cập nhật làm firmware không khởi động.",
    "mechanism": "Dual-bank update, xác minh chữ ký, checkpoint và quy tắc chỉ cập nhật khi pin đủ.",
    "experiment": "Fault injection mất điện ngẫu nhiên và đo tỷ lệ boot recovery.",
    "steps": [
      "Thiết lập thông số môi trường, công suất và điều kiện vận hành.",
      "Thiết kế nguyên mẫu RF, cảm biến hoặc quản trị năng lượng.",
      "Đo trong phòng thí nghiệm với cùng điều kiện đối chứng.",
      "Thử nghiệm ngoại trường, mô hình hóa nhiễu và phân tích tuổi thọ."
    ],
    "metrics": "joule/event, battery life, read range, BER/PER, latency, BOM",
    "baseline": "Gateway LoRaWAN, đầu đọc RFID, scheduler nhúng hoặc mạch quản trị nguồn thông dụng",
    "risk": "Phải tuân thủ quy định tần số vô tuyến, EMC và an toàn điện; không suy ra quyền dùng sáng chế Tesla.",
    "stage": "Hệ thống"
  },
  {
    "id": 70,
    "slug": "gp-070",
    "name": "Edge Battery Fault Predictor",
    "category": 6,
    "problem": "Pin lỗi khó phát hiện bằng một ngưỡng điện áp đơn giản.",
    "mechanism": "Mô hình chuỗi thời gian nhỏ phân loại bất thường với hard-limit độc lập.",
    "experiment": "Đo lead time cảnh báo và false alarm trong profile lão hóa.",
    "steps": [
      "Thiết lập thông số môi trường, công suất và điều kiện vận hành.",
      "Thiết kế nguyên mẫu RF, cảm biến hoặc quản trị năng lượng.",
      "Đo trong phòng thí nghiệm với cùng điều kiện đối chứng.",
      "Thử nghiệm ngoại trường, mô hình hóa nhiễu và phân tích tuổi thọ."
    ],
    "metrics": "joule/event, battery life, read range, BER/PER, latency, BOM",
    "baseline": "Gateway LoRaWAN, đầu đọc RFID, scheduler nhúng hoặc mạch quản trị nguồn thông dụng",
    "risk": "Phải tuân thủ quy định tần số vô tuyến, EMC và an toàn điện; không suy ra quyền dùng sáng chế Tesla.",
    "stage": "Hệ thống"
  },
  {
    "id": 71,
    "slug": "gp-071",
    "name": "Licensed Social Event Stream Processor",
    "category": 7,
    "problem": "Sự kiện từ nhiều kênh có thể trùng và đến không đúng thứ tự.",
    "mechanism": "Pipeline incremental có event time, window dedup và data provenance.",
    "experiment": "Đo latency và độ đầy đủ với sự kiện đến trễ.",
    "steps": [
      "Chỉ nhập dữ liệu có quyền sử dụng và truy xuất nguồn gốc.",
      "Xây pipeline làm sạch, chuẩn hóa và gắn mốc thời gian.",
      "Phát triển mô hình xử lý incremental và bằng chứng truy xuất.",
      "Đánh giá chống trùng, sai lệch thời gian, rò rỉ và chi phí vận hành."
    ],
    "metrics": "precision/recall, freshness, p95 latency, provenance coverage, chi phí bản ghi",
    "baseline": "Keyword search, RAG cơ bản hoặc ETL theo lô",
    "risk": "Không mặc định nội dung X được phép scraping hoặc huấn luyện; bảo vệ thông tin cá nhân.",
    "stage": "Hệ thống"
  },
  {
    "id": 72,
    "slug": "gp-072",
    "name": "Vietnamese Social Slang Compiler",
    "category": 7,
    "problem": "Từ lóng và viết tắt làm giảm hiệu quả NLP trên văn bản ngắn.",
    "mechanism": "Từ điển phiên bản hóa kết hợp parser ngữ cảnh để chuẩn hóa có khả năng khôi phục.",
    "experiment": "Đo F1 chuẩn hóa trên mẫu bình luận hợp pháp.",
    "steps": [
      "Chỉ nhập dữ liệu có quyền sử dụng và truy xuất nguồn gốc.",
      "Xây pipeline làm sạch, chuẩn hóa và gắn mốc thời gian.",
      "Phát triển mô hình xử lý incremental và bằng chứng truy xuất.",
      "Đánh giá chống trùng, sai lệch thời gian, rò rỉ và chi phí vận hành."
    ],
    "metrics": "precision/recall, freshness, p95 latency, provenance coverage, chi phí bản ghi",
    "baseline": "Keyword search, RAG cơ bản hoặc ETL theo lô",
    "risk": "Không mặc định nội dung X được phép scraping hoặc huấn luyện; bảo vệ thông tin cá nhân.",
    "stage": "Hệ thống"
  },
  {
    "id": 73,
    "slug": "gp-073",
    "name": "Cryptographic Content Provenance Chain",
    "category": 7,
    "problem": "Nội dung tóm tắt khó xác định nguồn và dấu vết sửa đổi.",
    "mechanism": "Liên kết hash của tài liệu gốc, thời gian thu thập và bản chuyển đổi trong sổ kiểm toán.",
    "experiment": "Thử thay đổi nội dung và đo khả năng phát hiện can thiệp.",
    "steps": [
      "Chỉ nhập dữ liệu có quyền sử dụng và truy xuất nguồn gốc.",
      "Xây pipeline làm sạch, chuẩn hóa và gắn mốc thời gian.",
      "Phát triển mô hình xử lý incremental và bằng chứng truy xuất.",
      "Đánh giá chống trùng, sai lệch thời gian, rò rỉ và chi phí vận hành."
    ],
    "metrics": "precision/recall, freshness, p95 latency, provenance coverage, chi phí bản ghi",
    "baseline": "Keyword search, RAG cơ bản hoặc ETL theo lô",
    "risk": "Không mặc định nội dung X được phép scraping hoặc huấn luyện; bảo vệ thông tin cá nhân.",
    "stage": "Hệ thống"
  },
  {
    "id": 74,
    "slug": "gp-074",
    "name": "Noisy Vietnamese Entity Resolver",
    "category": 7,
    "problem": "Tên tổ chức/địa điểm bị gõ sai hoặc không dấu dẫn đến trùng thực thể.",
    "mechanism": "Ghép phát hiện candidate ngữ âm, semantic similarity và ràng buộc địa danh.",
    "experiment": "Đo precision@1 trên cơ sở dữ liệu thực thể có nhãn.",
    "steps": [
      "Chỉ nhập dữ liệu có quyền sử dụng và truy xuất nguồn gốc.",
      "Xây pipeline làm sạch, chuẩn hóa và gắn mốc thời gian.",
      "Phát triển mô hình xử lý incremental và bằng chứng truy xuất.",
      "Đánh giá chống trùng, sai lệch thời gian, rò rỉ và chi phí vận hành."
    ],
    "metrics": "precision/recall, freshness, p95 latency, provenance coverage, chi phí bản ghi",
    "baseline": "Keyword search, RAG cơ bản hoặc ETL theo lô",
    "risk": "Không mặc định nội dung X được phép scraping hoặc huấn luyện; bảo vệ thông tin cá nhân.",
    "stage": "Hệ thống"
  },
  {
    "id": 75,
    "slug": "gp-075",
    "name": "Temporal Claim Consistency Engine",
    "category": 7,
    "problem": "Thông tin đúng ở thời điểm cũ có thể trở thành sai ở thời điểm mới.",
    "mechanism": "Lưu phát biểu kèm valid-time và nguồn, kiểm tra mâu thuẫn theo khoảng thời gian.",
    "experiment": "Đo F1 phát hiện xung đột trên tập thông tin thay đổi theo ngày.",
    "steps": [
      "Chỉ nhập dữ liệu có quyền sử dụng và truy xuất nguồn gốc.",
      "Xây pipeline làm sạch, chuẩn hóa và gắn mốc thời gian.",
      "Phát triển mô hình xử lý incremental và bằng chứng truy xuất.",
      "Đánh giá chống trùng, sai lệch thời gian, rò rỉ và chi phí vận hành."
    ],
    "metrics": "precision/recall, freshness, p95 latency, provenance coverage, chi phí bản ghi",
    "baseline": "Keyword search, RAG cơ bản hoặc ETL theo lô",
    "risk": "Không mặc định nội dung X được phép scraping hoặc huấn luyện; bảo vệ thông tin cá nhân.",
    "stage": "Hệ thống"
  },
  {
    "id": 76,
    "slug": "gp-076",
    "name": "Time-Decaying Evidence Retrieval",
    "category": 7,
    "problem": "RAG có thể lấy tài liệu lỗi thời cho câu hỏi cần thông tin mới.",
    "mechanism": "Xếp hạng bằng độ liên quan, ngày hiệu lực và mức chứng thực nguồn.",
    "experiment": "Đo freshness accuracy với truy vấn có mốc thời gian.",
    "steps": [
      "Chỉ nhập dữ liệu có quyền sử dụng và truy xuất nguồn gốc.",
      "Xây pipeline làm sạch, chuẩn hóa và gắn mốc thời gian.",
      "Phát triển mô hình xử lý incremental và bằng chứng truy xuất.",
      "Đánh giá chống trùng, sai lệch thời gian, rò rỉ và chi phí vận hành."
    ],
    "metrics": "precision/recall, freshness, p95 latency, provenance coverage, chi phí bản ghi",
    "baseline": "Keyword search, RAG cơ bản hoặc ETL theo lô",
    "risk": "Không mặc định nội dung X được phép scraping hoặc huấn luyện; bảo vệ thông tin cá nhân.",
    "stage": "Hệ thống"
  },
  {
    "id": 77,
    "slug": "gp-077",
    "name": "Consent-Based Personal Archive RAG",
    "category": 7,
    "problem": "Người dùng cần tra cứu lịch sử riêng mà không đưa dữ liệu lên dịch vụ ngoài.",
    "mechanism": "Chỉ mục offline có policy access, quy trình xóa nguồn và cập nhật incremental.",
    "experiment": "Đo recall, tốc độ xóa dữ liệu và truy cập trái phép bị từ chối.",
    "steps": [
      "Chỉ nhập dữ liệu có quyền sử dụng và truy xuất nguồn gốc.",
      "Xây pipeline làm sạch, chuẩn hóa và gắn mốc thời gian.",
      "Phát triển mô hình xử lý incremental và bằng chứng truy xuất.",
      "Đánh giá chống trùng, sai lệch thời gian, rò rỉ và chi phí vận hành."
    ],
    "metrics": "precision/recall, freshness, p95 latency, provenance coverage, chi phí bản ghi",
    "baseline": "Keyword search, RAG cơ bản hoặc ETL theo lô",
    "risk": "Không mặc định nội dung X được phép scraping hoặc huấn luyện; bảo vệ thông tin cá nhân.",
    "stage": "Hệ thống"
  },
  {
    "id": 78,
    "slug": "gp-078",
    "name": "Data Rights-Aware AI Pipeline",
    "category": 7,
    "problem": "Nguồn dữ liệu có giấy phép khác nhau dễ bị trộn vào huấn luyện.",
    "mechanism": "Metadata gắn chính sách sử dụng từng record, rule engine chặn pipeline trái quyền.",
    "experiment": "Dùng tập synthetic về quyền dữ liệu để kiểm thử enforcement.",
    "steps": [
      "Chỉ nhập dữ liệu có quyền sử dụng và truy xuất nguồn gốc.",
      "Xây pipeline làm sạch, chuẩn hóa và gắn mốc thời gian.",
      "Phát triển mô hình xử lý incremental và bằng chứng truy xuất.",
      "Đánh giá chống trùng, sai lệch thời gian, rò rỉ và chi phí vận hành."
    ],
    "metrics": "precision/recall, freshness, p95 latency, provenance coverage, chi phí bản ghi",
    "baseline": "Keyword search, RAG cơ bản hoặc ETL theo lô",
    "risk": "Không mặc định nội dung X được phép scraping hoặc huấn luyện; bảo vệ thông tin cá nhân.",
    "stage": "Hệ thống"
  },
  {
    "id": 79,
    "slug": "gp-079",
    "name": "Real-Time Vietnamese Topic Drift Detector",
    "category": 7,
    "problem": "Chủ đề mạng đổi nhanh trong khi retrain thường xuyên tốn kém.",
    "mechanism": "Embedding gọn và cửa sổ trượt theo thời gian phát hiện drift thống kê.",
    "experiment": "Đo delay phát hiện và false alarm khi xu hướng chuyển dịch.",
    "steps": [
      "Chỉ nhập dữ liệu có quyền sử dụng và truy xuất nguồn gốc.",
      "Xây pipeline làm sạch, chuẩn hóa và gắn mốc thời gian.",
      "Phát triển mô hình xử lý incremental và bằng chứng truy xuất.",
      "Đánh giá chống trùng, sai lệch thời gian, rò rỉ và chi phí vận hành."
    ],
    "metrics": "precision/recall, freshness, p95 latency, provenance coverage, chi phí bản ghi",
    "baseline": "Keyword search, RAG cơ bản hoặc ETL theo lô",
    "risk": "Không mặc định nội dung X được phép scraping hoặc huấn luyện; bảo vệ thông tin cá nhân.",
    "stage": "Hệ thống"
  },
  {
    "id": 80,
    "slug": "gp-080",
    "name": "Cross-Source Event Correlation",
    "category": 7,
    "problem": "Tin nhiều nguồn về cùng sự kiện có cách diễn đạt khác nhau.",
    "mechanism": "Gom cụm bằng thực thể, địa điểm, thời gian và độ tương đồng văn bản.",
    "experiment": "Đo precision/recall của các cụm sự kiện có nguồn xác minh.",
    "steps": [
      "Chỉ nhập dữ liệu có quyền sử dụng và truy xuất nguồn gốc.",
      "Xây pipeline làm sạch, chuẩn hóa và gắn mốc thời gian.",
      "Phát triển mô hình xử lý incremental và bằng chứng truy xuất.",
      "Đánh giá chống trùng, sai lệch thời gian, rò rỉ và chi phí vận hành."
    ],
    "metrics": "precision/recall, freshness, p95 latency, provenance coverage, chi phí bản ghi",
    "baseline": "Keyword search, RAG cơ bản hoặc ETL theo lô",
    "risk": "Không mặc định nội dung X được phép scraping hoặc huấn luyện; bảo vệ thông tin cá nhân.",
    "stage": "Hệ thống"
  },
  {
    "id": 81,
    "slug": "gp-081",
    "name": "Private On-Device Vietnamese Speech",
    "category": 8,
    "problem": "Giọng nói có thể chứa dữ liệu nhạy cảm khi đưa lên cloud.",
    "mechanism": "ASR offline, mã hóa dữ liệu lưu tạm và chính sách xóa ring buffer sau xử lý.",
    "experiment": "Đo latency, RAM và xác minh không có lưu lượng mạng.",
    "steps": [
      "Thiết lập threat model, quyền hạn và ranh giới tin cậy.",
      "Xây lớp xác minh độc lập, fail-closed và log kiểm toán.",
      "Kiểm thử lỗi, nhiễu, injection, mất điện hoặc dữ liệu bị thay đổi.",
      "Đo mức giảm rủi ro, false positive và tác động đến hiệu năng."
    ],
    "metrics": "vi phạm chính sách, false positive/negative, MTTR, overhead, coverage",
    "baseline": "Hệ thống chưa có lớp kiểm soát; bộ kiểm thử bảo mật hiện có",
    "risk": "Không gọi một mã kiểm tra lỗi là mật mã; tránh ghi log bí mật và thông tin nhận dạng cá nhân.",
    "stage": "Hệ thống"
  },
  {
    "id": 82,
    "slug": "gp-082",
    "name": "Hardware-Isolated AI Credentials",
    "category": 8,
    "problem": "API key nhúng trong frontend hoặc firmware dễ bị trích xuất.",
    "mechanism": "Tách bí mật sang secure element/keystore và ký yêu cầu thay vì tiết lộ khóa.",
    "experiment": "Kiểm thử static extraction, rotate key và hành vi khi mất thiết bị.",
    "steps": [
      "Thiết lập threat model, quyền hạn và ranh giới tin cậy.",
      "Xây lớp xác minh độc lập, fail-closed và log kiểm toán.",
      "Kiểm thử lỗi, nhiễu, injection, mất điện hoặc dữ liệu bị thay đổi.",
      "Đo mức giảm rủi ro, false positive và tác động đến hiệu năng."
    ],
    "metrics": "vi phạm chính sách, false positive/negative, MTTR, overhead, coverage",
    "baseline": "Hệ thống chưa có lớp kiểm soát; bộ kiểm thử bảo mật hiện có",
    "risk": "Không gọi một mã kiểm tra lỗi là mật mã; tránh ghi log bí mật và thông tin nhận dạng cá nhân.",
    "stage": "Hệ thống"
  },
  {
    "id": 83,
    "slug": "gp-083",
    "name": "Trit Frame Integrity Layer",
    "category": 8,
    "problem": "Truyền dữ liệu ba mức thiếu khả năng phát hiện hỏng khung.",
    "mechanism": "Thêm mã kiểm tra lỗi trên biểu diễn chuẩn hóa và sequence counter.",
    "experiment": "Đo tỷ lệ lỗi không phát hiện trong kênh nhiễu mô phỏng.",
    "steps": [
      "Thiết lập threat model, quyền hạn và ranh giới tin cậy.",
      "Xây lớp xác minh độc lập, fail-closed và log kiểm toán.",
      "Kiểm thử lỗi, nhiễu, injection, mất điện hoặc dữ liệu bị thay đổi.",
      "Đo mức giảm rủi ro, false positive và tác động đến hiệu năng."
    ],
    "metrics": "vi phạm chính sách, false positive/negative, MTTR, overhead, coverage",
    "baseline": "Hệ thống chưa có lớp kiểm soát; bộ kiểm thử bảo mật hiện có",
    "risk": "Không gọi một mã kiểm tra lỗi là mật mã; tránh ghi log bí mật và thông tin nhận dạng cá nhân.",
    "stage": "Hệ thống"
  },
  {
    "id": 84,
    "slug": "gp-084",
    "name": "Cryptographically Verified Dual-Bank Firmware",
    "category": 8,
    "problem": "Firmware không xác thực có thể bị thay hoặc rollback độc hại.",
    "mechanism": "A/B partition, xác minh chữ ký trước chạy và anti-rollback có kiểm soát.",
    "experiment": "Thử bản cập nhật giả, mất điện và khóa ký sai.",
    "steps": [
      "Thiết lập threat model, quyền hạn và ranh giới tin cậy.",
      "Xây lớp xác minh độc lập, fail-closed và log kiểm toán.",
      "Kiểm thử lỗi, nhiễu, injection, mất điện hoặc dữ liệu bị thay đổi.",
      "Đo mức giảm rủi ro, false positive và tác động đến hiệu năng."
    ],
    "metrics": "vi phạm chính sách, false positive/negative, MTTR, overhead, coverage",
    "baseline": "Hệ thống chưa có lớp kiểm soát; bộ kiểm thử bảo mật hiện có",
    "risk": "Không gọi một mã kiểm tra lỗi là mật mã; tránh ghi log bí mật và thông tin nhận dạng cá nhân.",
    "stage": "Hệ thống"
  },
  {
    "id": 85,
    "slug": "gp-085",
    "name": "Secret-Safe AI Build Pipeline",
    "category": 8,
    "problem": "Secret lọt vào Git, artifacts và log CI/CD có thể bị lạm dụng.",
    "mechanism": "Kiểm tra gitleaks, redaction, secret scanning và chặn merge không đạt chính sách.",
    "experiment": "Dùng secret giả trong test repository để đo detection/false alarms.",
    "steps": [
      "Thiết lập threat model, quyền hạn và ranh giới tin cậy.",
      "Xây lớp xác minh độc lập, fail-closed và log kiểm toán.",
      "Kiểm thử lỗi, nhiễu, injection, mất điện hoặc dữ liệu bị thay đổi.",
      "Đo mức giảm rủi ro, false positive và tác động đến hiệu năng."
    ],
    "metrics": "vi phạm chính sách, false positive/negative, MTTR, overhead, coverage",
    "baseline": "Hệ thống chưa có lớp kiểm soát; bộ kiểm thử bảo mật hiện có",
    "risk": "Không gọi một mã kiểm tra lỗi là mật mã; tránh ghi log bí mật và thông tin nhận dạng cá nhân.",
    "stage": "Hệ thống"
  },
  {
    "id": 86,
    "slug": "gp-086",
    "name": "Deterministic AI Action Circuit Breaker",
    "category": 8,
    "problem": "LLM có thể đề xuất hành động nguy hiểm hoặc vô nghĩa.",
    "mechanism": "Gate độc lập kiểm tra hạn mức, quyền, tiền điều kiện và thời hạn trước actuator.",
    "experiment": "Inject lệnh vượt quyền, đo tỷ lệ ngăn và chi phí xử lý.",
    "steps": [
      "Thiết lập threat model, quyền hạn và ranh giới tin cậy.",
      "Xây lớp xác minh độc lập, fail-closed và log kiểm toán.",
      "Kiểm thử lỗi, nhiễu, injection, mất điện hoặc dữ liệu bị thay đổi.",
      "Đo mức giảm rủi ro, false positive và tác động đến hiệu năng."
    ],
    "metrics": "vi phạm chính sách, false positive/negative, MTTR, overhead, coverage",
    "baseline": "Hệ thống chưa có lớp kiểm soát; bộ kiểm thử bảo mật hiện có",
    "risk": "Không gọi một mã kiểm tra lỗi là mật mã; tránh ghi log bí mật và thông tin nhận dạng cá nhân.",
    "stage": "Hệ thống"
  },
  {
    "id": 87,
    "slug": "gp-087",
    "name": "Prompt-to-IR Boundary Validator",
    "category": 8,
    "problem": "Prompt injection có thể bị diễn giải thành câu lệnh điều khiển.",
    "mechanism": "Định nghĩa parser IR dạng schema strict, allowlist kỹ năng và chữ ký context.",
    "experiment": "Thử tập injection không độc hại mô phỏng và đo số lệnh trái phép.",
    "steps": [
      "Thiết lập threat model, quyền hạn và ranh giới tin cậy.",
      "Xây lớp xác minh độc lập, fail-closed và log kiểm toán.",
      "Kiểm thử lỗi, nhiễu, injection, mất điện hoặc dữ liệu bị thay đổi.",
      "Đo mức giảm rủi ro, false positive và tác động đến hiệu năng."
    ],
    "metrics": "vi phạm chính sách, false positive/negative, MTTR, overhead, coverage",
    "baseline": "Hệ thống chưa có lớp kiểm soát; bộ kiểm thử bảo mật hiện có",
    "risk": "Không gọi một mã kiểm tra lỗi là mật mã; tránh ghi log bí mật và thông tin nhận dạng cá nhân.",
    "stage": "Hệ thống"
  },
  {
    "id": 88,
    "slug": "gp-088",
    "name": "Ternary Fault-Injection Verification",
    "category": 8,
    "problem": "Thiết kế trit có trạng thái lỗi khó quan sát bằng test thông thường.",
    "mechanism": "Tạo bộ lỗi random/stuck-at trên dòng ba mức và đối chiếu invariant.",
    "experiment": "Đo fault coverage và số lỗi gây sai đầu ra.",
    "steps": [
      "Thiết lập threat model, quyền hạn và ranh giới tin cậy.",
      "Xây lớp xác minh độc lập, fail-closed và log kiểm toán.",
      "Kiểm thử lỗi, nhiễu, injection, mất điện hoặc dữ liệu bị thay đổi.",
      "Đo mức giảm rủi ro, false positive và tác động đến hiệu năng."
    ],
    "metrics": "vi phạm chính sách, false positive/negative, MTTR, overhead, coverage",
    "baseline": "Hệ thống chưa có lớp kiểm soát; bộ kiểm thử bảo mật hiện có",
    "risk": "Không gọi một mã kiểm tra lỗi là mật mã; tránh ghi log bí mật và thông tin nhận dạng cá nhân.",
    "stage": "Hệ thống"
  },
  {
    "id": 89,
    "slug": "gp-089",
    "name": "Tamper-Evident TinyLLM Decision Trace",
    "category": 8,
    "problem": "Log quyết định AI có thể bị chỉnh sửa sau sự cố.",
    "mechanism": "Hash chain, timestamp và sự kiện đã loại bỏ dữ liệu nhạy cảm để audit.",
    "experiment": "Thử chỉnh log, xóa bản ghi và tái hiện bằng checksum.",
    "steps": [
      "Thiết lập threat model, quyền hạn và ranh giới tin cậy.",
      "Xây lớp xác minh độc lập, fail-closed và log kiểm toán.",
      "Kiểm thử lỗi, nhiễu, injection, mất điện hoặc dữ liệu bị thay đổi.",
      "Đo mức giảm rủi ro, false positive và tác động đến hiệu năng."
    ],
    "metrics": "vi phạm chính sách, false positive/negative, MTTR, overhead, coverage",
    "baseline": "Hệ thống chưa có lớp kiểm soát; bộ kiểm thử bảo mật hiện có",
    "risk": "Không gọi một mã kiểm tra lỗi là mật mã; tránh ghi log bí mật và thông tin nhận dạng cá nhân.",
    "stage": "Hệ thống"
  },
  {
    "id": 90,
    "slug": "gp-090",
    "name": "Privacy-Preserving Edge Model Update",
    "category": 8,
    "problem": "Cập nhật nhiều edge node có thể gây lộ dữ liệu nội bộ.",
    "mechanism": "Phân phối delta được ký, kiểm soát quyền và thực nghiệm secure aggregation phù hợp.",
    "experiment": "Đo kích thước bản cập nhật, rollback và mức bảo vệ trên threat model.",
    "steps": [
      "Thiết lập threat model, quyền hạn và ranh giới tin cậy.",
      "Xây lớp xác minh độc lập, fail-closed và log kiểm toán.",
      "Kiểm thử lỗi, nhiễu, injection, mất điện hoặc dữ liệu bị thay đổi.",
      "Đo mức giảm rủi ro, false positive và tác động đến hiệu năng."
    ],
    "metrics": "vi phạm chính sách, false positive/negative, MTTR, overhead, coverage",
    "baseline": "Hệ thống chưa có lớp kiểm soát; bộ kiểm thử bảo mật hiện có",
    "risk": "Không gọi một mã kiểm tra lỗi là mật mã; tránh ghi log bí mật và thông tin nhận dạng cá nhân.",
    "stage": "Hệ thống"
  },
  {
    "id": 91,
    "slug": "gp-091",
    "name": "Vietnamese Administrative Document Reconstruction",
    "category": 9,
    "problem": "OCR tài liệu hành chính thường sai bố cục, bảng biểu và căn lề.",
    "mechanism": "Phát hiện vùng bố cục, giữ bounding box và dựng DOCX theo style template cấu hình.",
    "experiment": "Đo độ khớp layout và số chỉnh sửa thủ công sau xuất.",
    "steps": [
      "Thu thập yêu cầu thực địa và xác định các chuẩn/quy định áp dụng.",
      "Xây nguyên mẫu kết nối lõi ngôn ngữ với nghiệp vụ cụ thể.",
      "Đo hiệu quả trên bộ dữ liệu và quy trình thực tế.",
      "Đánh giá khả năng vận hành, khả năng tái lập và chi phí bảo trì."
    ],
    "metrics": "task success, error rate, turnaround time, RAM, chi phí vận hành",
    "baseline": "Quy trình hiện tại, phần mềm thông dụng và thao tác thủ công",
    "risk": "Không tuyên bố tuân thủ chuẩn pháp lý hay chuẩn thiết bị khi chưa thẩm định độc lập.",
    "stage": "Ứng dụng"
  },
  {
    "id": 92,
    "slug": "gp-092",
    "name": "Vietnamese Accessible Speech Terminal",
    "category": 9,
    "problem": "Người dùng cần phụ đề tiếng Việt tức thời không phụ thuộc Internet.",
    "mechanism": "Kết hợp ASR local, bộ sửa lỗi CVNSS và UI phụ đề độ trễ thấp.",
    "experiment": "Đo WER và thời gian hiển thị với giọng nhiều vùng.",
    "steps": [
      "Thu thập yêu cầu thực địa và xác định các chuẩn/quy định áp dụng.",
      "Xây nguyên mẫu kết nối lõi ngôn ngữ với nghiệp vụ cụ thể.",
      "Đo hiệu quả trên bộ dữ liệu và quy trình thực tế.",
      "Đánh giá khả năng vận hành, khả năng tái lập và chi phí bảo trì."
    ],
    "metrics": "task success, error rate, turnaround time, RAM, chi phí vận hành",
    "baseline": "Quy trình hiện tại, phần mềm thông dụng và thao tác thủ công",
    "risk": "Không tuyên bố tuân thủ chuẩn pháp lý hay chuẩn thiết bị khi chưa thẩm định độc lập.",
    "stage": "Ứng dụng"
  },
  {
    "id": 93,
    "slug": "gp-093",
    "name": "GIS Coordinate and Schema Validator",
    "category": 9,
    "problem": "Hồ sơ GIS bị từ chối do sai CRS, schema hoặc topology.",
    "mechanism": "Bộ validator kiểm tra metadata VN-2000, lớp bắt buộc và quy tắc hình học.",
    "experiment": "Đo tỷ lệ phát hiện lỗi trên các bộ hồ sơ có lỗi gắn nhãn.",
    "steps": [
      "Thu thập yêu cầu thực địa và xác định các chuẩn/quy định áp dụng.",
      "Xây nguyên mẫu kết nối lõi ngôn ngữ với nghiệp vụ cụ thể.",
      "Đo hiệu quả trên bộ dữ liệu và quy trình thực tế.",
      "Đánh giá khả năng vận hành, khả năng tái lập và chi phí bảo trì."
    ],
    "metrics": "task success, error rate, turnaround time, RAM, chi phí vận hành",
    "baseline": "Quy trình hiện tại, phần mềm thông dụng và thao tác thủ công",
    "risk": "Không tuyên bố tuân thủ chuẩn pháp lý hay chuẩn thiết bị khi chưa thẩm định độc lập.",
    "stage": "Ứng dụng"
  },
  {
    "id": 94,
    "slug": "gp-094",
    "name": "Vietnamese Multimodal Disaster Alert Node",
    "category": 9,
    "problem": "Cảnh báo cần hoạt động khi Internet gián đoạn hoặc cảm biến đơn lẻ bị lỗi.",
    "mechanism": "Ghép đa cảm biến và luật ngưỡng fail-safe với TTS/thông báo tiếng Việt offline.",
    "experiment": "Đo false alarm, missed alarm và thời gian phát cảnh báo.",
    "steps": [
      "Thu thập yêu cầu thực địa và xác định các chuẩn/quy định áp dụng.",
      "Xây nguyên mẫu kết nối lõi ngôn ngữ với nghiệp vụ cụ thể.",
      "Đo hiệu quả trên bộ dữ liệu và quy trình thực tế.",
      "Đánh giá khả năng vận hành, khả năng tái lập và chi phí bảo trì."
    ],
    "metrics": "task success, error rate, turnaround time, RAM, chi phí vận hành",
    "baseline": "Quy trình hiện tại, phần mềm thông dụng và thao tác thủ công",
    "risk": "Không tuyên bố tuân thủ chuẩn pháp lý hay chuẩn thiết bị khi chưa thẩm định độc lập.",
    "stage": "Ứng dụng"
  },
  {
    "id": 95,
    "slug": "gp-095",
    "name": "Aquaculture Edge Intelligence",
    "category": 9,
    "problem": "Dữ liệu nuôi thủy sản theo thời gian thực khó truyền liên tục từ điểm xa.",
    "mechanism": "Nút edge phân tích DO, pH, nhiệt độ và truyền sự kiện bất thường ưu tiên.",
    "experiment": "Đo thời gian phát hiện và năng lượng trong mô hình ao nuôi.",
    "steps": [
      "Thu thập yêu cầu thực địa và xác định các chuẩn/quy định áp dụng.",
      "Xây nguyên mẫu kết nối lõi ngôn ngữ với nghiệp vụ cụ thể.",
      "Đo hiệu quả trên bộ dữ liệu và quy trình thực tế.",
      "Đánh giá khả năng vận hành, khả năng tái lập và chi phí bảo trì."
    ],
    "metrics": "task success, error rate, turnaround time, RAM, chi phí vận hành",
    "baseline": "Quy trình hiện tại, phần mềm thông dụng và thao tác thủ công",
    "risk": "Không tuyên bố tuân thủ chuẩn pháp lý hay chuẩn thiết bị khi chưa thẩm định độc lập.",
    "stage": "Ứng dụng"
  },
  {
    "id": 96,
    "slug": "gp-096",
    "name": "RFID-Based Rural Asset Tracking",
    "category": 9,
    "problem": "Theo dõi tài sản ở nông thôn gặp hạn chế pin và hạ tầng mạng.",
    "mechanism": "Kết hợp chipless RFID, cổng đọc định kỳ và truyền ID qua LoRaWAN.",
    "experiment": "Đo read rate, chi phí mỗi điểm đo và thời lượng gateway.",
    "steps": [
      "Thu thập yêu cầu thực địa và xác định các chuẩn/quy định áp dụng.",
      "Xây nguyên mẫu kết nối lõi ngôn ngữ với nghiệp vụ cụ thể.",
      "Đo hiệu quả trên bộ dữ liệu và quy trình thực tế.",
      "Đánh giá khả năng vận hành, khả năng tái lập và chi phí bảo trì."
    ],
    "metrics": "task success, error rate, turnaround time, RAM, chi phí vận hành",
    "baseline": "Quy trình hiện tại, phần mềm thông dụng và thao tác thủ công",
    "risk": "Không tuyên bố tuân thủ chuẩn pháp lý hay chuẩn thiết bị khi chưa thẩm định độc lập.",
    "stage": "Ứng dụng"
  },
  {
    "id": 97,
    "slug": "gp-097",
    "name": "Vietnamese CNC Robot Operator",
    "category": 9,
    "problem": "Giao diện máy CNC phụ thuộc cú pháp kỹ thuật gây khó cho người dùng tiếng Việt.",
    "mechanism": "Biên dịch lệnh trong miền hẹp sang skill kiểm tra precondition và khóa liên động CNC.",
    "experiment": "Kiểm thử bằng digital twin trước khi cho phép chạy máy thật.",
    "steps": [
      "Thu thập yêu cầu thực địa và xác định các chuẩn/quy định áp dụng.",
      "Xây nguyên mẫu kết nối lõi ngôn ngữ với nghiệp vụ cụ thể.",
      "Đo hiệu quả trên bộ dữ liệu và quy trình thực tế.",
      "Đánh giá khả năng vận hành, khả năng tái lập và chi phí bảo trì."
    ],
    "metrics": "task success, error rate, turnaround time, RAM, chi phí vận hành",
    "baseline": "Quy trình hiện tại, phần mềm thông dụng và thao tác thủ công",
    "risk": "Không tuyên bố tuân thủ chuẩn pháp lý hay chuẩn thiết bị khi chưa thẩm định độc lập.",
    "stage": "Ứng dụng"
  },
  {
    "id": 98,
    "slug": "gp-098",
    "name": "Offline Agricultural Advisory Device",
    "category": 9,
    "problem": "Vùng thiếu mạng cần tư vấn kỹ thuật từ tài liệu tin cậy.",
    "mechanism": "TinyLLM local với RAG tài liệu nông nghiệp có phiên bản và ngưỡng từ chối.",
    "experiment": "Đo factual accuracy và chi phí tài nguyên trên edge.",
    "steps": [
      "Thu thập yêu cầu thực địa và xác định các chuẩn/quy định áp dụng.",
      "Xây nguyên mẫu kết nối lõi ngôn ngữ với nghiệp vụ cụ thể.",
      "Đo hiệu quả trên bộ dữ liệu và quy trình thực tế.",
      "Đánh giá khả năng vận hành, khả năng tái lập và chi phí bảo trì."
    ],
    "metrics": "task success, error rate, turnaround time, RAM, chi phí vận hành",
    "baseline": "Quy trình hiện tại, phần mềm thông dụng và thao tác thủ công",
    "risk": "Không tuyên bố tuân thủ chuẩn pháp lý hay chuẩn thiết bị khi chưa thẩm định độc lập.",
    "stage": "Ứng dụng"
  },
  {
    "id": 99,
    "slug": "gp-099",
    "name": "Reproducible Vietnamese Ternary AI Benchmark",
    "category": 9,
    "problem": "Các công bố nén mô hình khó so sánh do thiếu cùng điều kiện.",
    "mechanism": "Cung cấp harness kiểm tra model, dữ liệu, phần cứng và năng lượng theo protocol cố định.",
    "experiment": "Đo độ lặp lại giữa máy và khoảng tin cậy của từng chỉ số.",
    "steps": [
      "Thu thập yêu cầu thực địa và xác định các chuẩn/quy định áp dụng.",
      "Xây nguyên mẫu kết nối lõi ngôn ngữ với nghiệp vụ cụ thể.",
      "Đo hiệu quả trên bộ dữ liệu và quy trình thực tế.",
      "Đánh giá khả năng vận hành, khả năng tái lập và chi phí bảo trì."
    ],
    "metrics": "task success, error rate, turnaround time, RAM, chi phí vận hành",
    "baseline": "Quy trình hiện tại, phần mềm thông dụng và thao tác thủ công",
    "risk": "Không tuyên bố tuân thủ chuẩn pháp lý hay chuẩn thiết bị khi chưa thẩm định độc lập.",
    "stage": "Ứng dụng"
  },
  {
    "id": 100,
    "slug": "gp-100",
    "name": "Vietnamese Semantic-to-Hardware Compiler",
    "category": 9,
    "problem": "Chuyển ý định tiếng Việt thành hành động phần cứng còn thiếu lớp kiểm soát kỹ thuật.",
    "mechanism": "Pipeline Unicode→CVNSS4.0→Typed Task IR→BilaScript/NHDL với safety verification trước xuất mã.",
    "experiment": "Demo end-to-end trên mô phỏng FPGA/robot, đo độ trễ và tỷ lệ hành động an toàn.",
    "steps": [
      "Thu thập yêu cầu thực địa và xác định các chuẩn/quy định áp dụng.",
      "Xây nguyên mẫu kết nối lõi ngôn ngữ với nghiệp vụ cụ thể.",
      "Đo hiệu quả trên bộ dữ liệu và quy trình thực tế.",
      "Đánh giá khả năng vận hành, khả năng tái lập và chi phí bảo trì."
    ],
    "metrics": "task success, error rate, turnaround time, RAM, chi phí vận hành",
    "baseline": "Quy trình hiện tại, phần mềm thông dụng và thao tác thủ công",
    "risk": "Không tuyên bố tuân thủ chuẩn pháp lý hay chuẩn thiết bị khi chưa thẩm định độc lập.",
    "stage": "Ứng dụng"
  }
];
