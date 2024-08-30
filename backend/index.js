const express = require("express");
const cors = require("cors");
const path = require("path");
const multer = require("multer");
const fs = require("fs");

const userRoutes = require("./routes/user");
const productRoutes = require("./routes/product");
const categoryRoutes = require("./routes/category");
const orderRoutes = require("./routes/order");
const orderDetailRoutes = require("./routes/orderdetail");
const authRoutes = require("./routes/auth");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
  origin: 'http://localhost:3001',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Phục vụ các tập tin tĩnh từ thư mục tải lên
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Cấu hình lưu trữ multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const entity = req.params.entity || 'default'; // Lấy thực thể từ tham số URL, mặc định là 'default'
    const uploadPath = path.join(__dirname, "uploads", entity);
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const originalName = file.originalname;
    const extension = path.extname(originalName);
    const nameWithoutExt = path.basename(originalName, extension);
    cb(null, `${nameWithoutExt}${extension}`); // Thêm dấu thời gian vào tên tệp
  },
});

const upload = multer({ storage });

// Tuyến đường để xử lý việc tải lên tệp
app.post("/api/upload/:entity", upload.single("file"), (req, res) => {
  const file = req.file;
  if (!file) {
    return res.status(400).send({ error: "No file uploaded" });
  }
  res.json({ filePath: `${file.filename}` }); // Trả về đường dẫn tệp tin
});

// Use specific routes
app.use('/api', userRoutes);
app.use('/api', productRoutes);
app.use('/api', categoryRoutes);
app.use('/api', orderRoutes);
app.use('/api', orderDetailRoutes);
app.use('/api', authRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
