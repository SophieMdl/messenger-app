import React from "react";
import {
  Card,
  CardHeader,
  Avatar,
  Typography,
  CardContent,
  Box
} from "@material-ui/core";
import { Lock } from "@material-ui/icons";

const MessageContent = ({ msg }) => {
  return (
    <Card className="message" key={msg.id} variant="outlined">
      {msg.private === true && (
        <Box
          justifyContent="center"
          alignItems="flex-end"
          p={1}
          className="private-box"
          display="flex"
        >
          <Lock fontSize="small" />
          Message privé
        </Box>
      )}
      <CardHeader
        avatar={<Avatar />}
        title={msg.author}
        subheader="September 14, 2016"
      />
      <CardContent>
        <Typography>{msg.content}</Typography>
      </CardContent>
    </Card>
  );
};

export default MessageContent;