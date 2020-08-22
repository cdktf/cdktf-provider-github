// https://www.terraform.io/docs/providers/github/r/team_sync_group_mapping.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface TeamSyncGroupMappingConfig extends TerraformMetaArguments {
  readonly teamSlug: string;
  /** group block */
  readonly group?: TeamSyncGroupMappingGroup[];
}
export interface TeamSyncGroupMappingGroup {
  readonly groupDescription: string;
  readonly groupId: string;
  readonly groupName: string;
}

// Resource

export class TeamSyncGroupMapping extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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

  // etag - computed: true, optional: false, required: true
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // team_slug - computed: false, optional: false, required: true
  private _teamSlug: string;
  public get teamSlug() {
    return this._teamSlug;
  }
  public set teamSlug(value: string) {
    this._teamSlug = value;
  }

  // group - computed: false, optional: true, required: false
  private _group?: TeamSyncGroupMappingGroup[];
  public get group() {
    return this._group;
  }
  public set group(value: TeamSyncGroupMappingGroup[] | undefined) {
    this._group = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      team_slug: this._teamSlug,
      group: this._group,
    };
  }
}
