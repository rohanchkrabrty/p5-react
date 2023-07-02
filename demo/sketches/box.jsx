export function sketch(p5) {
    let rotation = 0;
    let image = null;

    p5.preload = () => {
        image = p5.loadImage(
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Rotating_earth_%28large%29.gif/300px-Rotating_earth_%28large%29.gif"
        );
        image.play();
    };
    p5.setup = () => p5.createCanvas(300, 300, p5.WEBGL);

    p5.updateWithProps = props => {
        if (props.rotation) {
            rotation = (props.rotation * Math.PI) / 180;
        }
    };

    p5.draw = () => {
        p5.background(100);
        p5.normalMaterial();
        p5.noStroke();

        p5.push();
        p5.imageMode(p5.CENTER);
        p5.image(image, 0, 0, 200, 200);
        p5.pop();
    };
}
