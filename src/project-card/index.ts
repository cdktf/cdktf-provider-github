/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/integrations/github/6.2.2/docs/resources/project_card
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectCardConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the project column.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.2/docs/resources/project_card#column_id ProjectCard#column_id}
  */
  readonly columnId: string;
  /**
  * 'github_issue.issue_id'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.2/docs/resources/project_card#content_id ProjectCard#content_id}
  */
  readonly contentId?: number;
  /**
  * Must be either 'Issue' or 'PullRequest'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.2/docs/resources/project_card#content_type ProjectCard#content_type}
  */
  readonly contentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.2/docs/resources/project_card#id ProjectCard#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The note contents of the card. Markdown supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.2/docs/resources/project_card#note ProjectCard#note}
  */
  readonly note?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.2.2/docs/resources/project_card github_project_card}
*/
export class ProjectCard extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "github_project_card";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProjectCard resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProjectCard to import
  * @param importFromId The id of the existing ProjectCard that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.2.2/docs/resources/project_card#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProjectCard to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_project_card", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.2.2/docs/resources/project_card github_project_card} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectCardConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectCardConfig) {
    super(scope, id, {
      terraformResourceType: 'github_project_card',
      terraformGeneratorMetadata: {
        providerName: 'github',
        providerVersion: '6.2.2',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._columnId = config.columnId;
    this._contentId = config.contentId;
    this._contentType = config.contentType;
    this._id = config.id;
    this._note = config.note;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // card_id - computed: true, optional: false, required: false
  public get cardId() {
    return this.getNumberAttribute('card_id');
  }

  // column_id - computed: false, optional: false, required: true
  private _columnId?: string; 
  public get columnId() {
    return this.getStringAttribute('column_id');
  }
  public set columnId(value: string) {
    this._columnId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnIdInput() {
    return this._columnId;
  }

  // content_id - computed: false, optional: true, required: false
  private _contentId?: number; 
  public get contentId() {
    return this.getNumberAttribute('content_id');
  }
  public set contentId(value: number) {
    this._contentId = value;
  }
  public resetContentId() {
    this._contentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentIdInput() {
    return this._contentId;
  }

  // content_type - computed: false, optional: true, required: false
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // note - computed: false, optional: true, required: false
  private _note?: string; 
  public get note() {
    return this.getStringAttribute('note');
  }
  public set note(value: string) {
    this._note = value;
  }
  public resetNote() {
    this._note = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noteInput() {
    return this._note;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      column_id: cdktf.stringToTerraform(this._columnId),
      content_id: cdktf.numberToTerraform(this._contentId),
      content_type: cdktf.stringToTerraform(this._contentType),
      id: cdktf.stringToTerraform(this._id),
      note: cdktf.stringToTerraform(this._note),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      column_id: {
        value: cdktf.stringToHclTerraform(this._columnId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content_id: {
        value: cdktf.numberToHclTerraform(this._contentId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      content_type: {
        value: cdktf.stringToHclTerraform(this._contentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      note: {
        value: cdktf.stringToHclTerraform(this._note),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
