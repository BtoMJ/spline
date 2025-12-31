import Spline from "@splinetool/react-spline";
import "./Sphere.css";

function Sphere() {
  return (
    <main>
      <section className="one">
        <h1>Diseño Interactivo</h1>
        <h3>en cada desarrollo</h3>
        <p>
          Basado en las necesidades de cada proyecto, construimos experiencias
          de usuario memorables, que proyecten esa identidad que se requiere
          comunicar.
        </p>
        <button className="btn-1">+ Detalles</button>
      </section>
      <section className="two">
        <Spline scene="https://prod.spline.design/rdIIHHWOFF8MpFVp/scene.splinecode" />
      </section>
    </main>
  );
}

export default Sphere;
