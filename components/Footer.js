import styles from "../styles/Footer.module.css"



export const Footer = () => {
    return (
        <>
            <div className={styles.footer}>
                <div className={styles.footerWrapper}>
                    <h3 className={styles.footerText}>Copyright &copy; 2022 All rights reserved</h3>
                </div>
            </div>
        </>
    )
}
