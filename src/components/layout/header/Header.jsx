import { FiArrowLeft } from 'react-icons/fi'
import { useAuth } from '../../hooks/useAuth'
import styles from './Header.module.scss'

const Header = ({ backLink }) => {
	/* TODO: React router useHistory */

	const { isAuth } = useAuth()

	return (
		<header className={styles.header}>
			<button onClick={() => {}}>
				<FiArrowLeft />
			</button>
			{/* User Profile */}
			<Hamburger />
		</header>
	)
}
export default Header
