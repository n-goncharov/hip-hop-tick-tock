import { FC } from 'react';
import styles from './Button.module.scss';

interface IButtonProps {
	title: string;
	onClick?: () => void;
}

const Button: FC<IButtonProps> = ({
	title,
	onClick
}) => {
	return (
		<div
			className={styles.button}
			onClick={onClick}
		>
			<svg fill="currentColor" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
				width="18px" height="18px" viewBox="0 0 400 400" xmlSpace="preserve">
				<g>
					<g>
						<path d="M199.995,0C89.716,0,0,89.72,0,200c0,110.279,89.716,200,199.995,200C310.277,400,400,310.279,400,200
			C400,89.72,310.277,0,199.995,0z M199.995,373.77C104.182,373.77,26.23,295.816,26.23,200c0-95.817,77.951-173.77,173.765-173.77
			c95.817,0,173.772,77.953,173.772,173.77C373.769,295.816,295.812,373.77,199.995,373.77z"/>
						<path d="M279.478,186.884h-66.363V120.52c0-7.243-5.872-13.115-13.115-13.115s-13.115,5.873-13.115,13.115v66.368h-66.361
			c-7.242,0-13.115,5.873-13.115,13.115c0,7.243,5.873,13.115,13.115,13.115h66.358v66.362c0,7.242,5.872,13.114,13.115,13.114
			c7.242,0,13.115-5.872,13.115-13.114v-66.365h66.367c7.241,0,13.114-5.873,13.114-13.115
			C292.593,192.757,286.72,186.884,279.478,186.884z"/>
					</g>
				</g>
			</svg>

			<span className={styles.title}>{title}</span>
		</div>
	);
};

export default Button;
