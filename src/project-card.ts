// https://www.terraform.io/docs/providers/github/r/project_card.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectCardConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/project_card.html#column_id ProjectCard#column_id}
  */
  readonly columnId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/project_card.html#note ProjectCard#note}
  */
  readonly note: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/github/r/project_card.html github_project_card}
*/
export class ProjectCard extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "github_project_card";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/github/r/project_card.html github_project_card} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectCardConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectCardConfig) {
    super(scope, id, {
      terraformResourceType: 'github_project_card',
      terraformGeneratorMetadata: {
        providerName: 'github'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._columnId = config.columnId;
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
    return this._columnId
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // note - computed: false, optional: false, required: true
  private _note?: string; 
  public get note() {
    return this.getStringAttribute('note');
  }
  public set note(value: string) {
    this._note = value;
  }
  // Temporarily expose input value. Use with caution.
  public get noteInput() {
    return this._note
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      column_id: cdktf.stringToTerraform(this._columnId),
      note: cdktf.stringToTerraform(this._note),
    };
  }
}
