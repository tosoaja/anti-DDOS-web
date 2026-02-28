export default function handler(req, res) {
    const ip =
        req.headers["x-forwarded-for"] ||
        req.headers["x-real-ip"] ||
        req.socket?.remoteAddress ||
        "Tidak diketahui";

    const time = new Date().toLocaleString("id-ID", {
        timeZone: "Asia/Jakarta"
    });

    const data = {
        waktu: time,
        ip: ip,
        method: req.method,
        url: req.url,
        userAgent: req.headers["user-agent"],
        headers: req.headers,
        body: req.body || null
    };

    console.log("Request masuk:", data);

    res.status(200).json({
        status: "Request diterima",
        data: data
    });
}
