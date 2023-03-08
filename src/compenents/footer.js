import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
return (
<div>
<footer className="text-center text-white position-fixed bottom-0 w-100" style={{ backgroundColor: '#f1f1f1' }}>

<div className="text-center text-dark p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
© 2020 Copyright:
<a className="text-dark" href="https://mdbootstrap.com/">?</a>
</div>
</footer>
</div>
);
}

export default Footer;