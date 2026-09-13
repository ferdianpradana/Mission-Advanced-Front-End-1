import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import bgLogin from "../../assets/bgLogin.jpg";
import logo from "../../assets/Logo.png";
import { Input } from "../../components/ui/Input";
import { Button } from "../../components/ui/Button";
import { EyeIcon, GoogleIcon } from "../../components/ui/icons";

export function Login() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [form, setForm] = useState({ username: "", password: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/dashboard");
    };

    return (
        <div
            className="min-h-screen w-full flex items-center justify-center bg-cover bg-center bg-no-repeat px-4 py-10"
            style={{ backgroundImage: `url(${bgLogin})` }}
        >
            <div className="w-full max-w-md rounded-2xl border border-white/10 bg-black/70 p-8 backdrop-blur-md">
                <div className="flex justify-center">
                    <img src={logo} alt="Chill" className="h-8" />
                </div>

                <div className="mt-6 text-center">
                    <h1 className="text-2xl font-bold text-white">Masuk</h1>
                    <p className="mt-1 text-sm text-white/60">Selamat datang kembali!</p>
                </div>

                <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-5">
                    <Input
                        label="Username"
                        name="username"
                        placeholder="Masukkan username"
                        value={form.username}
                        onChange={handleChange}
                    />

                    <div className="flex flex-col gap-3">
                        <Input
                            label="Kata Sandi"
                            name="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Masukkan kata sandi"
                            value={form.password}
                            onChange={handleChange}
                            rightElement={
                                <button
                                    type="button"
                                    onClick={() => setShowPassword((prev) => !prev)}
                                    className="text-white/50 hover:text-white/80"
                                >
                                    <EyeIcon open={showPassword} />
                                </button>
                            }
                        />

                        <div className="flex items-center justify-between text-sm">
                            <span className="text-white/60">
                                Belum punya akun?{" "}
                                <Link to="/register" className="font-semibold text-white">
                                    Daftar
                                </Link>
                            </span>
                            <Link to="/forgot-password" className="text-white/60 hover:text-white">
                                Lupa kata sandi?
                            </Link>
                        </div>
                    </div>

                    <Button type="submit">Masuk</Button>

                    <p className="text-center text-xs text-white/40">Atau</p>

                    <Button variant="outline" icon={<GoogleIcon />}>
                        Masuk dengan Google
                    </Button>
                </form>
            </div>
        </div>
    );
}
