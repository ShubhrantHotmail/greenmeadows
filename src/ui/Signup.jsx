import {
  Button,
  Divider,
  FormControl,
  FormHelperText,
  FormLabel,
  Grid,
  Input,
  Option,
  Select,
  Stack,
  Typography,
} from "@mui/joy";
import React from "react";
import { flats } from "../data/flats";

export default function Signup() {
  const [flatDetail, setFlatDetail] = React.useState({
    flat: "",
    owner: "",
    mobile: "",
    password: "",
  });

  const handleFlatChange = (e, value) => {
    setFlatDetail({ ...flatDetail, flat: value });
  };
  const handleOwnerChange = (e) => {
    setFlatDetail({ ...flatDetail, owner: e.target.value });
  };
  const handleMobileChange = (e) => {
    setFlatDetail({ ...flatDetail, mobile: e.target.value });
  };
  const handlePasswordChange = (e) => {
    setFlatDetail({ ...flatDetail, password: e.target.value });
  };
  const handleSave = () => {
    console.log(flatDetail);
  };
  return (
    <Grid container justifyContent="center" sx={{ flexGrow: 1, padding: 2 }}>
      <Grid xs={12} sm={6} md={4} lg={3}>
        <Stack spacing={2}>
          <Typography level="h4" color="success">
            Green Meadows Apartment
          </Typography>
          <Divider />
          <Typography level="title-lg">Enroll Your Home</Typography>
          <FormControl>
            <FormLabel>Flat Number</FormLabel>
            <Select
              variant="soft"
              value={flatDetail?.flat}
              onChange={handleFlatChange}
            >
              {flats?.map((flat) => {
                return <Option value={flat}>{flat}</Option>;
              })}
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Owner Name</FormLabel>
            <Input
              variant="soft"
              value={flatDetail?.owner}
              onChange={handleOwnerChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Mobile</FormLabel>
            <Input
              type="number"
              variant="soft"
              value={flatDetail?.mobile}
              onChange={handleMobileChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Set Password</FormLabel>
            <Input
              variant="soft"
              value={flatDetail?.password}
              onChange={handlePasswordChange}
            />
            <FormHelperText>
              <ul>
                <li>Password must have minimum of 8 characters</li>
                <li>
                  Password must contain at least one number, one special
                  character and a chracater in block
                </li>
              </ul>
            </FormHelperText>
          </FormControl>
          <FormControl>
            <Button onClick={handleSave}>Save</Button>
          </FormControl>
        </Stack>
      </Grid>
    </Grid>
  );
}
