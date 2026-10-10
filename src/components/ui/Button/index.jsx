import './style.css';

export const Button = ({ children, inline }) => {
	return <button className={`btn ${inline && 'btn-inline'}`}>{children}</button>;
};
