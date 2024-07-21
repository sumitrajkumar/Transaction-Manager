import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";

import React from "react";

const initialValues = {
  date: "",
  amount: "",
  income: "",
  expense: "",
  currency: "",
  note: "",
};

const dateRegExp =
  /^(3[01]|[12][0-9]|0?[1-9])(\/|-)(1[0-2]|0?[1-9])\2([0-9]{2})?[0-9]{2}$/;
const amountRegExp =
  /(?:^[1-9]([0-9]+)?(?:\.[0-9]{1,2})?$)|(?:^(?:0)$)|(?:^[0-9]\.[0-9](?:[0-9])?$)/;

const userSchema = yup.object().shape({
  date: yup
    .string()
    .matches(dateRegExp, "date is not valid")
    .required("required"),

  amount: yup
    .string()
    .matches(amountRegExp, "Enter valid amount")
    .required("required"),

  income: yup
    .string()
    .matches(amountRegExp, "Enter valid income")
    .required("required"),

  expense: yup
    .string()
    .matches(amountRegExp, "Enter valid expense")
    .required("required"),

  currency: yup.string().required("required"),
  note: yup.string().required("required"),
});

function Form() {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };
  return (
    <Box m="20px">
      <Header
        title="New Transaction"
        subtitle="Create a new transaction"
      ></Header>

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={userSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="20px"
              gridTemplateColumns="repeat(4, minmax(1, 1fr))"          
                sx={{
                " & > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Date"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.date}
                name="date"
                error={!!touched.date && !!errors.date}
                helperText={!!touched.date && !!errors.date}
                sx={{ gridColumn: "span2" }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Amount"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.amount}
                name="amount"
                error={!!touched.amount && !!errors.amount}
                helperText={!!touched.amount && !!errors.amount}
                sx={{ gridColumn: "span2" }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Income"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.income}
                name="income"
                error={!!touched.income && !!errors.income}
                helperText={!!touched.income && !!errors.income}
                sx={{ gridColumn: "span2" }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Expense"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.expense}
                name="expense"
                error={!!touched.expense && !!errors.expense}
                helperText={!!touched.expense && !!errors.expense}
                sx={{ gridColumn: "span2" }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Currency"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.currency}
                name="currency"
                error={!!touched.currency && !!errors.currency}
                helperText={!!touched.currency && !!errors.currency}
                sx={{ gridColumn: "span2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Note"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.note}
                name="note"
                error={!!touched.note && !!errors.note}
                helperText={!!touched.note && !!errors.note}
                sx={{ gridColumn: "span4" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px" > 
                <Button type="submit" color="secondary" variant="contained" >
                New Transaction
                </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
}

export default Form;
