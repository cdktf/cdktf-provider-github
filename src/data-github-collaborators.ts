// https://www.terraform.io/docs/providers/github/d/collaborators
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGithubCollaboratorsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/d/collaborators#affiliation DataGithubCollaborators#affiliation}
  */
  readonly affiliation?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/d/collaborators#owner DataGithubCollaborators#owner}
  */
  readonly owner: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/d/collaborators#repository DataGithubCollaborators#repository}
  */
  readonly repository: string;
}
export class DataGithubCollaboratorsCollaborator extends cdktf.ComplexComputedList {

  // events_url - computed: true, optional: false, required: false
  public get eventsUrl() {
    return this.getStringAttribute('events_url');
  }

  // followers_url - computed: true, optional: false, required: false
  public get followersUrl() {
    return this.getStringAttribute('followers_url');
  }

  // following_url - computed: true, optional: false, required: false
  public get followingUrl() {
    return this.getStringAttribute('following_url');
  }

  // gists_url - computed: true, optional: false, required: false
  public get gistsUrl() {
    return this.getStringAttribute('gists_url');
  }

  // html_url - computed: true, optional: false, required: false
  public get htmlUrl() {
    return this.getStringAttribute('html_url');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // login - computed: true, optional: false, required: false
  public get login() {
    return this.getStringAttribute('login');
  }

  // organizations_url - computed: true, optional: false, required: false
  public get organizationsUrl() {
    return this.getStringAttribute('organizations_url');
  }

  // permission - computed: true, optional: false, required: false
  public get permission() {
    return this.getStringAttribute('permission');
  }

  // received_events_url - computed: true, optional: false, required: false
  public get receivedEventsUrl() {
    return this.getStringAttribute('received_events_url');
  }

  // repos_url - computed: true, optional: false, required: false
  public get reposUrl() {
    return this.getStringAttribute('repos_url');
  }

  // site_admin - computed: true, optional: false, required: false
  public get siteAdmin() {
    return this.getBooleanAttribute('site_admin') as any;
  }

  // starred_url - computed: true, optional: false, required: false
  public get starredUrl() {
    return this.getStringAttribute('starred_url');
  }

  // subscriptions_url - computed: true, optional: false, required: false
  public get subscriptionsUrl() {
    return this.getStringAttribute('subscriptions_url');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/github/d/collaborators github_collaborators}
*/
export class DataGithubCollaborators extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "github_collaborators";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/github/d/collaborators github_collaborators} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGithubCollaboratorsConfig
  */
  public constructor(scope: Construct, id: string, config: DataGithubCollaboratorsConfig) {
    super(scope, id, {
      terraformResourceType: 'github_collaborators',
      terraformGeneratorMetadata: {
        providerName: 'github'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._affiliation = config.affiliation;
    this._owner = config.owner;
    this._repository = config.repository;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // affiliation - computed: false, optional: true, required: false
  private _affiliation?: string; 
  public get affiliation() {
    return this.getStringAttribute('affiliation');
  }
  public set affiliation(value: string) {
    this._affiliation = value;
  }
  public resetAffiliation() {
    this._affiliation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affiliationInput() {
    return this._affiliation;
  }

  // collaborator - computed: true, optional: false, required: false
  public collaborator(index: string) {
    return new DataGithubCollaboratorsCollaborator(this, 'collaborator', index);
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // owner - computed: false, optional: false, required: true
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // repository - computed: false, optional: false, required: true
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      affiliation: cdktf.stringToTerraform(this._affiliation),
      owner: cdktf.stringToTerraform(this._owner),
      repository: cdktf.stringToTerraform(this._repository),
    };
  }
}
