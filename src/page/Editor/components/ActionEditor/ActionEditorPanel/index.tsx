import { FC } from "react"
import { Button, ButtonGroup } from "@illa-design/button"
import { Select, Option } from "@illa-design/select"
import { CaretRightIcon, MoreIcon, PenIcon } from "@illa-design/icon"
import { RadioGroup } from "@illa-design/radio"
import { ActionEditorPanelProps } from "./interface"
import {
  ContainerCSS,
  HeaderCSS,
  ActionCSS,
  FillingCSS,
  HeaderButtonCSS,
  ActionSelectCSS,
  ModeSelectCSS,
  TriggerSelectCSS,
  ResourceSelectCSS,
  EditIconCSS,
  MoreBtnCSS,
  RunBtnCSS,
  DisableTextCSS,
} from "./style"
import { TitleInput } from "./TitleInput"
import { MySQLPanel } from "./Resources/MySQL"
import { applyIllaColor } from "../style"

export const ActionEditorPanel: FC<ActionEditorPanelProps> = (props) => {
  const { className, children, onEditResource, onCreateResource } = props

  const modeOptions = [
    { label: "SQL mode", value: 0 },
    { label: "GUI mode", value: 1 },
  ]

  const triggerOptions = [
    {
      label: "Run action only when manually triggered",
      value: 0,
    },
    {
      label: "Run action automatically when inputs change",
      value: 1,
    },
  ]

  function createResource() {
    onCreateResource && onCreateResource()
  }

  function editResource() {
    onEditResource && onEditResource()
  }

  return (
    <div className={className} css={ContainerCSS}>
      <header css={HeaderCSS}>
        <TitleInput />
        <span css={FillingCSS} />
        <Button css={[HeaderButtonCSS, MoreBtnCSS]} size={"medium"}>
          <MoreIcon />
        </Button>
        <Button css={[HeaderButtonCSS, RunBtnCSS]} size={"medium"}>
          <CaretRightIcon /> Run
        </Button>
      </header>
      <div css={ActionCSS}>
        <label>Resourse</label>
        <span css={FillingCSS} />
        <Select
          options={modeOptions}
          defaultValue={0}
          css={[ActionSelectCSS, ModeSelectCSS]}
        />
        <Select
          options={triggerOptions}
          defaultValue={0}
          css={[ActionSelectCSS, TriggerSelectCSS]}
        />

        <Select css={[ActionSelectCSS, ResourceSelectCSS]}>
          <Option onClick={createResource}>Create a new resouce</Option>
          <Option>SQL</Option>
          <Option>REST API</Option>
        </Select>
        <div css={EditIconCSS} onClick={editResource}>
          <PenIcon />
        </div>
      </div>
      <div>
        <MySQLPanel />
      </div>
      <div css={ActionCSS}>
        <label>Transformer</label>
        <span css={FillingCSS} />
        <RadioGroup
          type="button"
          size="small"
          options={["Disable", "Enable"]}
          defaultValue="Disable"
        />
      </div>
    </div>
  )
}

ActionEditorPanel.displayName = "ActionEditorPanel"
