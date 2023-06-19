import '../CSS/footer.css'
const Footer=()=>{
    let date = new Date();
    const year=date.getFullYear()
    return(
        <div id="footer">
           <p><span>Copyright &copy;</span> {year} Your Company Desing: <span style={{color:'#fd5e53'}}>Level</span> </p>
        </div>
    )
}

export default Footer