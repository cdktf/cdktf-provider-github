// https://registry.terraform.io/providers/integrations/github/6.0.0/docs/data-sources/organization
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGithubOrganizationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.0.0/docs/data-sources/organization#id DataGithubOrganization#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.0.0/docs/data-sources/organization#name DataGithubOrganization#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.0.0/docs/data-sources/organization github_organization}
*/
export class DataGithubOrganization extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "github_organization";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGithubOrganization resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGithubOrganization to import
  * @param importFromId The id of the existing DataGithubOrganization that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.0.0/docs/data-sources/organization#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGithubOrganization to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_organization", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.0.0/docs/data-sources/organization github_organization} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGithubOrganizationConfig
  */
  public constructor(scope: Construct, id: string, config: DataGithubOrganizationConfig) {
    super(scope, id, {
      terraformResourceType: 'github_organization',
      terraformGeneratorMetadata: {
        providerName: 'github',
        providerVersion: '6.0.0',
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
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // advanced_security_enabled_for_new_repositories - computed: true, optional: false, required: false
  public get advancedSecurityEnabledForNewRepositories() {
    return this.getBooleanAttribute('advanced_security_enabled_for_new_repositories');
  }

  // default_repository_permission - computed: true, optional: false, required: false
  public get defaultRepositoryPermission() {
    return this.getStringAttribute('default_repository_permission');
  }

  // dependabot_alerts_enabled_for_new_repositories - computed: true, optional: false, required: false
  public get dependabotAlertsEnabledForNewRepositories() {
    return this.getBooleanAttribute('dependabot_alerts_enabled_for_new_repositories');
  }

  // dependabot_security_updates_enabled_for_new_repositories - computed: true, optional: false, required: false
  public get dependabotSecurityUpdatesEnabledForNewRepositories() {
    return this.getBooleanAttribute('dependabot_security_updates_enabled_for_new_repositories');
  }

  // dependency_graph_enabled_for_new_repositories - computed: true, optional: false, required: false
  public get dependencyGraphEnabledForNewRepositories() {
    return this.getBooleanAttribute('dependency_graph_enabled_for_new_repositories');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // login - computed: true, optional: false, required: false
  public get login() {
    return this.getStringAttribute('login');
  }

  // members - computed: true, optional: false, required: false
  public get members() {
    return this.getListAttribute('members');
  }

  // members_allowed_repository_creation_type - computed: true, optional: false, required: false
  public get membersAllowedRepositoryCreationType() {
    return this.getStringAttribute('members_allowed_repository_creation_type');
  }

  // members_can_create_internal_repositories - computed: true, optional: false, required: false
  public get membersCanCreateInternalRepositories() {
    return this.getBooleanAttribute('members_can_create_internal_repositories');
  }

  // members_can_create_pages - computed: true, optional: false, required: false
  public get membersCanCreatePages() {
    return this.getBooleanAttribute('members_can_create_pages');
  }

  // members_can_create_private_pages - computed: true, optional: false, required: false
  public get membersCanCreatePrivatePages() {
    return this.getBooleanAttribute('members_can_create_private_pages');
  }

  // members_can_create_private_repositories - computed: true, optional: false, required: false
  public get membersCanCreatePrivateRepositories() {
    return this.getBooleanAttribute('members_can_create_private_repositories');
  }

  // members_can_create_public_pages - computed: true, optional: false, required: false
  public get membersCanCreatePublicPages() {
    return this.getBooleanAttribute('members_can_create_public_pages');
  }

  // members_can_create_public_repositories - computed: true, optional: false, required: false
  public get membersCanCreatePublicRepositories() {
    return this.getBooleanAttribute('members_can_create_public_repositories');
  }

  // members_can_create_repositories - computed: true, optional: false, required: false
  public get membersCanCreateRepositories() {
    return this.getBooleanAttribute('members_can_create_repositories');
  }

  // members_can_fork_private_repositories - computed: true, optional: false, required: false
  public get membersCanForkPrivateRepositories() {
    return this.getBooleanAttribute('members_can_fork_private_repositories');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // node_id - computed: true, optional: false, required: false
  public get nodeId() {
    return this.getStringAttribute('node_id');
  }

  // orgname - computed: true, optional: false, required: false
  public get orgname() {
    return this.getStringAttribute('orgname');
  }

  // plan - computed: true, optional: false, required: false
  public get plan() {
    return this.getStringAttribute('plan');
  }

  // repositories - computed: true, optional: false, required: false
  public get repositories() {
    return this.getListAttribute('repositories');
  }

  // secret_scanning_enabled_for_new_repositories - computed: true, optional: false, required: false
  public get secretScanningEnabledForNewRepositories() {
    return this.getBooleanAttribute('secret_scanning_enabled_for_new_repositories');
  }

  // secret_scanning_push_protection_enabled_for_new_repositories - computed: true, optional: false, required: false
  public get secretScanningPushProtectionEnabledForNewRepositories() {
    return this.getBooleanAttribute('secret_scanning_push_protection_enabled_for_new_repositories');
  }

  // two_factor_requirement_enabled - computed: true, optional: false, required: false
  public get twoFactorRequirementEnabled() {
    return this.getBooleanAttribute('two_factor_requirement_enabled');
  }

  // users - computed: true, optional: false, required: false
  private _users = new cdktf.StringMapList(this, "users", false);
  public get users() {
    return this._users;
  }

  // web_commit_signoff_required - computed: true, optional: false, required: false
  public get webCommitSignoffRequired() {
    return this.getBooleanAttribute('web_commit_signoff_required');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
