import styles from './ListBox.module.scss';
import cn from "classnames";
import { memo, useState } from "react";
import { ThemeContext } from '../../contexts/ThemeContext';

const ListBox = memo(({ title, buttons, items }: any) => {
	const [isListActive, setListActive] = useState(false);

	return (
		<details className={styles.details}>
			<summary
				className={styles.summary}
				onClick={() => setListActive((isListActive) => !isListActive)}
			>
				<h2 className={styles.title}>{title}</h2>

				<ThemeContext.Consumer>
					{({ theme }: any) => {
						let src;
						if (theme === 'light') {
							src = '/img/arrow.png';
						} else {
							src = '/img/arrow-white.png';
						}

						return (
							<img
								className={cn(styles.arrow, { [styles.arrowOpen]: isListActive })}
								width={18}
								height={18}
								src={src}
								alt=""
							/>
						);
					}
					}
				</ThemeContext.Consumer>


			</summary>

			<div className={styles.buttonsContainer}>
				{buttons}
			</div>
			<ul className={styles.list}>
				{items}
			</ul>
		</details>
	);
});

export default ListBox;
