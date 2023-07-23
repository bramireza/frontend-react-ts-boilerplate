import { Button } from "@mui/material";

interface Props {
  children: JSX.Element | JSX.Element[] | String;
}
const ButtonCustom = ({ children }: Props) => {
  return (
    <>
      <Button
        variant="contained"
        type="submit"
        sx={{ mt: 2, mb: 2, width: "250px" }}
      >
        {children}
      </Button>
    </>
  );
};
export default ButtonCustom;
