const Error = (props) => {
  const { variant, children } = props;
  console.log(props);
  return <div className={`alert ${variant}`}>{children?.data?.message}</div>;
};
Error.defaultProps = {
  variant: "alert-info",
};

export default Error;
