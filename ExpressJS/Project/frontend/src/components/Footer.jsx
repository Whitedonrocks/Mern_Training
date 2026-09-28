function Footer() {
    let year = new Date().getFullYear();
    return (
        <footer>
            <p style={{backgroundColor: 'red'}}>&copy; {year} My Project. All rights reserved.</p>
        </footer>
    )
}

export default Footer;