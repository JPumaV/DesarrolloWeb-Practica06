class App extends React.Component {
    render() {
        return (
            <h1>¡Hola! Mi primera aplicación React con CDN</h1>
        );
    }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);