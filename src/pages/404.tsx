import styles from '@/styles/eror.module.css'
export default function custom404() {
    return (
        <div className={styles.eror}>
            <div>
               <img src="/404.svg" alt="" width="500px"/>
               <h1 style={{
                fontSize: '35px',
                fontWeight: 'bolder',
                textAlign: 'center'
               }}>
                Halaman Tidak Ditemukan</h1>
            </div>
        </div>
    )
}