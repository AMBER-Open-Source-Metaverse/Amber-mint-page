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
import { toast } from "react-toastify"

interface Props {
  open: boolean
  handleOpen: () => void
  mintRateLimit: number
  mintPrice: number
}

const MintDialog = (props: Props) => {
  const { locale } = useLocales()
  const [mintNumber, setMintNumber] = useState(1)
  const mintPrice = props.mintPrice / Math.pow(10, 24)
  console.log(locale)
  const handleOpen = () => {
    console.log(props.open)
    props.handleOpen()
  }

  const controlClicked = (eve: React.MouseEvent, type: number) => {
    if (mintNumber > props.mintRateLimit) {
      toast(`You can't mint over ${props.mintRateLimit}`)
      return
    }
    type == 1
      ? setMintNumber(prev => prev + 1)
      : setMintNumber(prev => prev - 1)
  }

  return (
    <Dialog
      open={props.open}
      handler={handleOpen}
      className={"rounded-[30px] px-4 py-8"}
    >
      <DialogHeader className="justify-center">
        {locale?.mintAvatar}
      </DialogHeader>
      <DialogBody className="flex-col">
        <div className="px-8 py-2">
          <h3 className="text-black text-xl">{locale?.item}</h3>
        </div>
        <ImagePart className="flex p-4 justify-between">
          <Image src={settings.mintItem} alt="avatar" />
          <div className="flex flex-col justify-center">
            <div className="text-white flex align-center">
              <Button
                variant="text"
                className="!text-white"
                onClick={(eve: React.MouseEvent) => controlClicked(eve, 1)}
              >
                +
              </Button>
              <h4 className="leading-[3rem] text-[1.3rem]">{mintNumber}</h4>
              <Button
                variant="text"
                className="!text-white"
                onClick={(eve: React.MouseEvent) => controlClicked(eve, 2)}
              >
                -
              </Button>
            </div>
            <h4 className="text-center text-[#FFE2F0]">
              {mintPrice}&nbsp;&nbsp;Near
            </h4>
          </div>
        </ImagePart>
        <div className="flex justify-between text-black px-8 py-5">
          <label className="text-xl">{locale?.total}</label>
          <label>{mintPrice * mintNumber} Near</label>
        </div>
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
  )
}

export default MintDialog

const ImagePart = styled.div`
  border-radius: 22px;
  background-origin: border-box;
  background-image: linear-gradient(to bottom, #bae7ff, #2eb5ff);
`
