const corsOptions = {
  origin: process.env.CLIENT_URL || "http://localhost:5173",
  //origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: false,
};

export default corsOptions;
