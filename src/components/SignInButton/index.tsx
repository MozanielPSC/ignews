import { FaGithub } from "react-icons/fa"
import { FiX } from "react-icons/fi"
import styles from "./styles.module.scss"
import { signIn, signOut,useSession } from "next-auth/client"
export function SignInButton() {
    const [ session] = useSession()
    return session ? (<button type="button" onClick={()=> signOut()} className={styles.signInButton}>
        <FaGithub color="#04d361"></FaGithub>
        {session.user.name}
        <FiX color="#737380" className={styles.closeIcon}></FiX>
    </button>) : (<button onClick={() => signIn('github')} type="button" className={styles.signInButton}>
        <FaGithub color="#eba417"></FaGithub>
        Sign In With Github
    </button>);
}