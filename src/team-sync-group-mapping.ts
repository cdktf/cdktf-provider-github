// https://www.terraform.io/docs/providers/github/r/team_sync_group_mapping.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TeamSyncGroupMappingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/team_sync_group_mapping.html#team_slug TeamSyncGroupMapping#team_slug}
  */
  readonly teamSlug: string;
  /**
  * group block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/team_sync_group_mapping.html#group TeamSyncGroupMapping#group}
  */
  readonly group?: TeamSyncGroupMappingGroup[];
}
export interface TeamSyncGroupMappingGroup {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/team_sync_group_mapping.html#group_description TeamSyncGroupMapping#group_description}
  */
  readonly groupDescription: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/team_sync_group_mapping.html#group_id TeamSyncGroupMapping#group_id}
  */
  readonly groupId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/team_sync_group_mapping.html#group_name TeamSyncGroupMapping#group_name}
  */
  readonly groupName: string;
}

function teamSyncGroupMappingGroupToTerraform(struct?: TeamSyncGroupMappingGroup): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    group_description: cdktf.stringToTerraform(struct!.groupDescription),
    group_id: cdktf.stringToTerraform(struct!.groupId),
    group_name: cdktf.stringToTerraform(struct!.groupName),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/github/r/team_sync_group_mapping.html github_team_sync_group_mapping}
*/
export class TeamSyncGroupMapping extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "github_team_sync_group_mapping";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/github/r/team_sync_group_mapping.html github_team_sync_group_mapping} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TeamSyncGroupMappingConfig
  */
  public constructor(scope: Construct, id: string, config: TeamSyncGroupMappingConfig) {
    super(scope, id, {
      terraformResourceType: 'github_team_sync_group_mapping',
      terraformGeneratorMetadata: {
        providerName: 'github'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._teamSlug = config.teamSlug;
    this._group = config.group;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // team_slug - computed: false, optional: false, required: true
  private _teamSlug: string;
  public get teamSlug() {
    return this.getStringAttribute('team_slug');
  }
  public set teamSlug(value: string) {
    this._teamSlug = value;
  }
  // Temporarily expose input value. Use with caution.
  public get teamSlugInput() {
    return this._teamSlug
  }

  // group - computed: false, optional: true, required: false
  private _group?: TeamSyncGroupMappingGroup[];
  public get group() {
    return this.interpolationForAttribute('group') as any;
  }
  public set group(value: TeamSyncGroupMappingGroup[] ) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      team_slug: cdktf.stringToTerraform(this._teamSlug),
      group: cdktf.listMapper(teamSyncGroupMappingGroupToTerraform)(this._group),
    };
  }
}
