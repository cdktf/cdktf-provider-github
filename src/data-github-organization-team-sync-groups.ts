// https://www.terraform.io/docs/providers/github/d/organization_team_sync_groups.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGithubOrganizationTeamSyncGroupsConfig extends cdktf.TerraformMetaArguments {
}
export class DataGithubOrganizationTeamSyncGroupsGroups extends cdktf.ComplexComputedList {

  // group_description - computed: true, optional: false, required: false
  public get groupDescription() {
    return this.getStringAttribute('group_description');
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getStringAttribute('group_id');
  }

  // group_name - computed: true, optional: false, required: false
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/github/d/organization_team_sync_groups.html github_organization_team_sync_groups}
*/
export class DataGithubOrganizationTeamSyncGroups extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "github_organization_team_sync_groups";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/github/d/organization_team_sync_groups.html github_organization_team_sync_groups} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGithubOrganizationTeamSyncGroupsConfig = {}
  */
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

  // groups - computed: true, optional: false, required: false
  public groups(index: string) {
    return new DataGithubOrganizationTeamSyncGroupsGroups(this, 'groups', index);
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }
}
