import React, { useState, useCallback } from "react";
import Head from "next/head";
import Header from "../components/header";
import SubHead from "../components/head";
import { useForm } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),

    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 750,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    backgroundColor: "#F5F5F5",
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const Message = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const inputName = useCallback(
    (event) => {
      setName(event.target.value);
    },
    [setName]
  );

  const inputMessage = useCallback(
    (event) => {
      setMessage(event.target.value);
    },
    [setMessage]
  );

  const { register, handleSubmit, errors } = useForm();
  // 以下にSlackに問い合わせがあったことを通知する
  const onSubmit = () => {
    const payload = {
      text:
        "メッセージがありました\n" +
        "お名前: " +
        name +
        "\n" +
        "【メッセージ内容】\n" +
        message,
    };

    fetch(process.env.ICOMING_HOOK_URL, {
      method: "POST",
      body: JSON.stringify(payload),
    }).then(() => {
      alert("送信が完了しました。");
      setMessage("");
      setName("");
    });
  };
  const classes = useStyles();

  return (
    <>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Head>
            <title>message</title>
          </Head>
          <Header />
          <SubHead />
          <div className="contents">
            <h2>※主のslackに送信されます</h2>
            <h2>※送信専用です</h2>
            <h2>※ご自由に入力してください(個人情報は入力しないでください)</h2>
            <div className="box">
              <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                  label="お名前(必須)"
                  type="text"
                  onChange={inputName}
                  name="name"
                  fullWidth
                  margin="normal"
                  error={Boolean(errors.name)}
                  helperText={errors.name && "※この項目は必須です"}
                  inputRef={register({
                    required: true,
                  })}
                />
                <TextField
                  label="メッセージ(必須)"
                  type="text"
                  onChange={inputMessage}
                  name="name"
                  name="message"
                  fullWidth
                  margin="normal"
                  inputRef={register({ required: true, maxLength: 150 })}
                  error={Boolean(errors.message)}
                  helperText={errors.message && "150文字以内で入力してください"}
                />

                <Button variant="contained" color="primary" type="submit">
                  送信
                </Button>
              </form>
            </div>
          </div>
        </Paper>
      </main>
    </>
  );
};

export default Message;
