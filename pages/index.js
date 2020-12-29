import Head from 'next/head'
import styles from '../styles/Home.module.css'
export default function Home() {
  return (
    <div className="bg-g1 size1 flex-w flex-col-c-sb p-l-15 p-r-15 p-t-55 p-b-35 respon1" style= {{
      margin:'auto',
      textAlign:'center',
      height:'100vh',
      display:'flex',
      alignItems:'center'
    }}>
        <div style={{width:'100%'}}>
          <div className="flex-col-c p-t-50 p-b-50" style={{display:'block',margin:'auto',textAlign:'center'}}>
            <h3 className="l1-txt1 txt-center p-b-10"> We are coming soon. </h3>
    
            <p className="txt-center l1-txt2 p-b-60">
              Do you have any query ?
              
            </p>
    
    
            <a href="mailto:aonedevs@gmail.com" target="blank" className="flex-c-m s1-txt2 size3 how-btn"  dataToggle="modal" dataTarget="#subscribe">
              Send us email
            </a>
          </div>
        </div>
      </div>
  )
}
