import React from 'react';
import classNames from 'classnames';

export enum ButtonSize {
	Large = 'lg',
	Small = 'sm'
}

export enum ButtonType {
	Primary = 'primary',
	Default = 'default',
	Danger = 'danger',
	Link = 'link'
}

export enum BgType {
	Concave = 'cc',
	Convex = 'cv'
}

interface BaseButtonProps {
	className?: string;
	disabled?: boolean;
	size?: ButtonSize;
	btnType?: ButtonType;
	bgType?: BgType;
	children: React.ReactNode;
	href?: string;
}

const Button: React.FC<BaseButtonProps> = (props) => {
	const { children, btnType, disabled, href, size, bgType } = props;
	const classes = classNames('btn', {
		[`btn-${btnType}`]: btnType,
		[`btn-${size}`]: size,
		disabled: btnType === ButtonType.Link && disabled,
		[`neumo-${btnType}-${bgType}`]: bgType && bgType
	});
	if (btnType === ButtonType.Link && href) {
		return (
			<a className={classes} href={href}>
				{children}
			</a>
		);
	}

	return (
		<button className={classes} disabled={disabled}>
			{children}
		</button>
	);
};

Button.defaultProps = {
	disabled: false,
	btnType: ButtonType.Default
};

export default Button;
