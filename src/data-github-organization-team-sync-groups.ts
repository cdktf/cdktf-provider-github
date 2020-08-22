// https://www.terraform.io/docs/providers/github/r/data_github_organization_team_sync_groups.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataGithubOrganizationTeamSyncGroupsConfig extends TerraformMetaArguments {
}
export class DataGithubOrganizationTeamSyncGroupsGroups extends ComplexComputedList {

  // group_description - computed: true, optional: false, required: true
  public get groupDescription() {
    return this.getStringAttribute('group_description');
  }

  // group_id - computed: true, optional: false, required: true
  public get groupId() {
    return this.getStringAttribute('group_id');
  }

  // group_name - computed: true, optional: false, required: true
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
}

// Resource

export class DataGithubOrganizationTeamSyncGroups extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataGithubOrganizationTeamSyncGroupsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'github_organization_team_sync_groups',
      terraformGeneratorMetadata: {
        providerName: 'github'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // groups - computed: true, optional: false, required: true
  public groups(index: string) {
    return new DataGithubOrganizationTeamSyncGroupsGroups(this, 'groups', index);
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }
}
