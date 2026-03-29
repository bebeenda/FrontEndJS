
(function () {
    const STAR_COUNT = 260;

    const canvas = document.createElement('canvas');
    canvas.id = 'starCanvas';
    document.body.prepend(canvas);

    const ctx = canvas.getContext('2d');

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    // Gera as estrelas
    const stars = Array.from({ length: STAR_COUNT }, () => ({
        x: Math.random(),
        y: Math.random() * 0.88,        // concentra no topo/meio
        r: Math.random() * 1.5 + 0.25,
        base: Math.random() * 0.65 + 0.12,
        speed: Math.random() * 0.55 + 0.2,
        phase: Math.random() * Math.PI * 2,
        blue: Math.random() < 0.40,        // 40% azuladas
        big: Math.random() < 0.07,        // 7% com halo
    }));

    function draw(t) {
        const W = canvas.width;
        const H = canvas.height;
        ctx.clearRect(0, 0, W, H);

        stars.forEach(s => {
            const pulse = Math.sin(t * 0.005 * s.speed + s.phase);
            const alpha = 0.5 + Math.sin(t * 0.005 + s.phase) * 0.5;
            const radius = s.big ? s.r * 2.5 : s.r * 1.3;

            // Cor: branca-azulada ou branca pura
            if (s.blue) {
                ctx.fillStyle = `rgba(160,200,255,${alpha})`;
            } else {
                // sutilmente violeta/branca para variar
                const g = Math.floor(210 + pulse * 25);
                ctx.fillStyle = `rgba(230,${g},255,${alpha * 0.88})`;
            }

            ctx.beginPath();
            ctx.arc(s.x * W, s.y * H, radius, 0, Math.PI * 2);

            // cor principal (azul/prata)
            ctx.fillStyle = s.colorType < 0.5
                ? `rgba(120, 180, 255, ${alpha})`   // 🔵 azul suave
                : `rgba(220, 220, 230, ${alpha})`; // ⚪ prata

            ctx.fill();

        // essa função deixa as estrelas com um glow neon
            ctx.shadowBlur = s.big ? 20 : 10;
            ctx.shadowColor = s.colorType < 0.5
                ? "rgba(15, 95, 243, 0.8)"
                : "rgba(255, 249, 231, 0.8)";
        });
        ctx.shadowBlur = 0;

        requestAnimationFrame(draw);
    }


    requestAnimationFrame(draw);
})();