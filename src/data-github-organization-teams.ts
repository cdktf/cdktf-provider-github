// https://www.terraform.io/docs/providers/github/d/organization_teams
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGithubOrganizationTeamsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/d/organization_teams#root_teams_only DataGithubOrganizationTeams#root_teams_only}
  */
  readonly rootTeamsOnly?: boolean | cdktf.IResolvable;
}
export class DataGithubOrganizationTeamsTeams extends cdktf.ComplexComputedList {

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // members - computed: true, optional: false, required: false
  public get members() {
    return this.getListAttribute('members');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // node_id - computed: true, optional: false, required: false
  public get nodeId() {
    return this.getStringAttribute('node_id');
  }

  // privacy - computed: true, optional: false, required: false
  public get privacy() {
    return this.getStringAttribute('privacy');
  }

  // repositories - computed: true, optional: false, required: false
  public get repositories() {
    return this.getListAttribute('repositories');
  }

  // slug - computed: true, optional: false, required: false
  public get slug() {
    return this.getStringAttribute('slug');
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/github/d/organization_teams github_organization_teams}
*/
export class DataGithubOrganizationTeams extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "github_organization_teams";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/github/d/organization_teams github_organization_teams} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGithubOrganizationTeamsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataGithubOrganizationTeamsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'github_organization_teams',
      terraformGeneratorMetadata: {
        providerName: 'github'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._rootTeamsOnly = config.rootTeamsOnly;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // root_teams_only - computed: false, optional: true, required: false
  private _rootTeamsOnly?: boolean | cdktf.IResolvable; 
  public get rootTeamsOnly() {
    return this.getBooleanAttribute('root_teams_only') as any;
  }
  public set rootTeamsOnly(value: boolean | cdktf.IResolvable) {
    this._rootTeamsOnly = value;
  }
  public resetRootTeamsOnly() {
    this._rootTeamsOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootTeamsOnlyInput() {
    return this._rootTeamsOnly;
  }

  // teams - computed: true, optional: false, required: false
  public teams(index: string) {
    return new DataGithubOrganizationTeamsTeams(this, 'teams', index);
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      root_teams_only: cdktf.booleanToTerraform(this._rootTeamsOnly),
    };
  }
}
