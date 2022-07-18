import React, { Fragment, useState } from "react"
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react"
import settings from "../../../config/settings.json"
import Image from "../image"
import useLocales from "../../hooks/useLocales"
import styled from "styled-components"

interface Props {
  open: boolean
}

const MintDialog = (props: Props) => {
  const [open, setOpen] = useState(props.open)
  console.log("HEY")
  console.log(props.open)
  const handleOpen = () => setOpen(!open)

  return (
    <Fragment>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Its a simple dialog.</DialogHeader>
        <DialogBody divider>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus ad
          reprehenderit omnis perspiciatis aut odit! Unde architecto
          perspiciatis, dolorum dolorem iure quia saepe autem accusamus eum
          praesentium magni corrupti explicabo!
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </Fragment>
  )
}

export default MintDialog

const Login = styled.div`
  border-radius: 20px;
  width: 40%;
  background-color: rgb(126, 112, 112);
  text-align: center;
  padding: 20px;
`

const Type = styled.div`
  margin: auto;
  background-image: linear-gradient(to right, #2eb5ff, #6acaff);
  border-radius: 20px;
  width: 60%;
  color: white;
  text-align: center;
`
