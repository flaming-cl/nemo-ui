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

type NativeButtonProps = BaseButtonProps &
	React.ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps &
	React.AnchorHTMLAttributes<HTMLElement>;
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

interface BaseButtonProps {
	className?: string;
	disabled?: boolean;
	size?: ButtonSize;
	btnType?: ButtonType;
	bgType?: BgType;
	children: React.ReactNode;
	href?: string;
}

const Button: React.FC<ButtonProps> = (props) => {
	const {
		children,
		className,
		btnType,
		bgType,
		disabled,
		href,
		size,
		...restProps
	} = props;
	const classes = classNames(
		'btn',
		{
			[`btn-${btnType}`]: btnType,
			[`btn-${size}`]: size,
			disabled: btnType === ButtonType.Link && disabled,
			[`btn-${btnType}-${bgType}`]: bgType && bgType
		},
		className
	);
	if (btnType === ButtonType.Link && href) {
		return (
			<a className={classes} href={href} {...restProps}>
				{children}
			</a>
		);
	}

	return (
		<button className={classes} disabled={disabled} {...restProps}>
			{children}
		</button>
	);
};

Button.defaultProps = {
	disabled: false,
	btnType: ButtonType.Default
};

export default Button;
