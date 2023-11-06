// https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/emu_group_mapping
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EmuGroupMappingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Integer corresponding to the external group ID to be linked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/emu_group_mapping#group_id EmuGroupMapping#group_id}
  */
  readonly groupId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/emu_group_mapping#id EmuGroupMapping#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Slug of the GitHub team.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/emu_group_mapping#team_slug EmuGroupMapping#team_slug}
  */
  readonly teamSlug: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/emu_group_mapping github_emu_group_mapping}
*/
export class EmuGroupMapping extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "github_emu_group_mapping";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EmuGroupMapping resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EmuGroupMapping to import
  * @param importFromId The id of the existing EmuGroupMapping that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/emu_group_mapping#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EmuGroupMapping to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_emu_group_mapping", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/emu_group_mapping github_emu_group_mapping} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EmuGroupMappingConfig
  */
  public constructor(scope: Construct, id: string, config: EmuGroupMappingConfig) {
    super(scope, id, {
      terraformResourceType: 'github_emu_group_mapping',
      terraformGeneratorMetadata: {
        providerName: 'github',
        providerVersion: '5.41.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._groupId = config.groupId;
    this._id = config.id;
    this._teamSlug = config.teamSlug;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // group_id - computed: false, optional: false, required: true
  private _groupId?: number; 
  public get groupId() {
    return this.getNumberAttribute('group_id');
  }
  public set groupId(value: number) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
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

  // team_slug - computed: false, optional: false, required: true
  private _teamSlug?: string; 
  public get teamSlug() {
    return this.getStringAttribute('team_slug');
  }
  public set teamSlug(value: string) {
    this._teamSlug = value;
  }
  // Temporarily expose input value. Use with caution.
  public get teamSlugInput() {
    return this._teamSlug;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      group_id: cdktf.numberToTerraform(this._groupId),
      id: cdktf.stringToTerraform(this._id),
      team_slug: cdktf.stringToTerraform(this._teamSlug),
    };
  }
}
