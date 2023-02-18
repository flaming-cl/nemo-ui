import React, { FC, useState } from 'react';
import classNames from 'classnames';
// import Icon from '../Icon';
import Transition from '../Transition';
export type AlertType =
	| 'primary'
	| 'default'
	| 'danger'
	| 'success'
	| 'warning';

export interface AlertProps {
	title: string;
	description?: string;
	type?: AlertType;
	onClose?: () => void;
	closable?: boolean;
	bgType?: string;
}

/**
 * 用于页面中展示重要的提示信息。 点击右侧的叉提示自动消失
 */
export const Alert: FC<AlertProps> = (props) => {
	const [hide, setHide] = useState(false);
	const { bgType, title, description, type, onClose, closable } = props;
	const classes = classNames('alert', {
		[`alert-${type}`]: type,
		[`alt-${type}-${bgType}`]: type
	});
	const titleClass = classNames('alert-title', {
		'bold-title': description
	});
	const handleClose = () => {
		if (onClose) {
			onClose();
		}
		setHide(true);
	};
	return (
		<Transition in={!hide} timeout={300} animation="zoom-in-top">
			<div className={classes}>
				<span className={titleClass}>{title}</span>
				{description && <p className="alert-desc">{description}</p>}
				{closable && (
					<span className="alert-close" onClick={handleClose}>
						x{/*<Icon icon="times" />*/}
					</span>
				)}
			</div>
		</Transition>
	);
};

Alert.defaultProps = {
	type: 'default',
	closable: true
};
export default Alert;
