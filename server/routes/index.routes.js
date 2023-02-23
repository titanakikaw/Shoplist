import authRoutes from "./auth.routes";
import cartRoutes from "./cart.routes";
import productRoutes from "./product.routes";
import userRoutes from "./user.routes";

export default class Routes {
  static initRoutes(app) {
    app.get("/", (req, res) => {
      res.send("hello world");
    });

    app.use("/api/auth", authRoutes);
    app.use("/api/user", userRoutes);
    app.use("/api/products", productRoutes);
    app.use("/api/cart", cartRoutes);
  }
}
