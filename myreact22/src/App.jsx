import Counter from "./Counter";

function Home() {
    return (
        <>
            <h2>My Home page</h2>
        </>
    );
}

function About() {
    return (
        <>
            <h2>My About Component</h2>
        </>
    );
}

function Jo() {
    return (
        <>
            <h2>Name: Hasini</h2>
            <h2 style={{ color: "blueviolet" }}>
                ID No: 2500032235
            </h2>
        </>
    );
}

function Student(props) {
    return (
        <>
            <h2>Student Details</h2>
            <h2>Name = {props.name}</h2>
            <h2>Age = {props.age}</h2>
            <h2>Marks = {props.marks}</h2>
        </>
    );
}

function App() {
    let sname = "Hasini";
    let sage = "18";
    let smarks = "95";

    return (
        <>
            <h1 style={{ color: "red" }}>
                Welcome To React JS
            </h1>

            <Home />
            <Home />
            <Home />

            <About />

            <Jo />

            <h1 style={{ color: "red" }}>
                Props Demonstration
            </h1>

            <Student
                name={sname}
                age={sage}
                marks={smarks}
            />

            <h1 style={{ color: "red" }}>
                State Demonstration
            </h1>

            <Counter />
        </>
    );
}

export default App;