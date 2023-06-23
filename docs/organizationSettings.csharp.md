# `github_organization_settings`

Refer to the Terraform Registory for docs: [`github_organization_settings`](https://registry.terraform.io/providers/integrations/github/5.28.1/docs/resources/organization_settings).

# `organizationSettings` Submodule <a name="`organizationSettings` Submodule" id="@cdktf/provider-github.organizationSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OrganizationSettings <a name="OrganizationSettings" id="@cdktf/provider-github.organizationSettings.OrganizationSettings"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/5.28.1/docs/resources/organization_settings github_organization_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new OrganizationSettings(Construct Scope, string Id, OrganizationSettingsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig">OrganizationSettingsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig">OrganizationSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetAdvancedSecurityEnabledForNewRepositories">ResetAdvancedSecurityEnabledForNewRepositories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetBlog">ResetBlog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetCompany">ResetCompany</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetDefaultRepositoryPermission">ResetDefaultRepositoryPermission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetDependabotAlertsEnabledForNewRepositories">ResetDependabotAlertsEnabledForNewRepositories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetDependabotSecurityUpdatesEnabledForNewRepositories">ResetDependabotSecurityUpdatesEnabledForNewRepositories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetDependencyGraphEnabledForNewRepositories">ResetDependencyGraphEnabledForNewRepositories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetEmail">ResetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetHasOrganizationProjects">ResetHasOrganizationProjects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetHasRepositoryProjects">ResetHasRepositoryProjects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetMembersCanCreateInternalRepositories">ResetMembersCanCreateInternalRepositories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetMembersCanCreatePages">ResetMembersCanCreatePages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetMembersCanCreatePrivatePages">ResetMembersCanCreatePrivatePages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetMembersCanCreatePrivateRepositories">ResetMembersCanCreatePrivateRepositories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetMembersCanCreatePublicPages">ResetMembersCanCreatePublicPages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetMembersCanCreatePublicRepositories">ResetMembersCanCreatePublicRepositories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetMembersCanCreateRepositories">ResetMembersCanCreateRepositories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetMembersCanForkPrivateRepositories">ResetMembersCanForkPrivateRepositories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetSecretScanningEnabledForNewRepositories">ResetSecretScanningEnabledForNewRepositories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetSecretScanningPushProtectionEnabledForNewRepositories">ResetSecretScanningPushProtectionEnabledForNewRepositories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetTwitterUsername">ResetTwitterUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.resetWebCommitSignoffRequired">ResetWebCommitSignoffRequired</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAdvancedSecurityEnabledForNewRepositories` <a name="ResetAdvancedSecurityEnabledForNewRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetAdvancedSecurityEnabledForNewRepositories"></a>

```csharp
private void ResetAdvancedSecurityEnabledForNewRepositories()
```

##### `ResetBlog` <a name="ResetBlog" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetBlog"></a>

```csharp
private void ResetBlog()
```

##### `ResetCompany` <a name="ResetCompany" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetCompany"></a>

```csharp
private void ResetCompany()
```

##### `ResetDefaultRepositoryPermission` <a name="ResetDefaultRepositoryPermission" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetDefaultRepositoryPermission"></a>

```csharp
private void ResetDefaultRepositoryPermission()
```

##### `ResetDependabotAlertsEnabledForNewRepositories` <a name="ResetDependabotAlertsEnabledForNewRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetDependabotAlertsEnabledForNewRepositories"></a>

```csharp
private void ResetDependabotAlertsEnabledForNewRepositories()
```

##### `ResetDependabotSecurityUpdatesEnabledForNewRepositories` <a name="ResetDependabotSecurityUpdatesEnabledForNewRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetDependabotSecurityUpdatesEnabledForNewRepositories"></a>

```csharp
private void ResetDependabotSecurityUpdatesEnabledForNewRepositories()
```

##### `ResetDependencyGraphEnabledForNewRepositories` <a name="ResetDependencyGraphEnabledForNewRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetDependencyGraphEnabledForNewRepositories"></a>

```csharp
private void ResetDependencyGraphEnabledForNewRepositories()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEmail` <a name="ResetEmail" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetEmail"></a>

```csharp
private void ResetEmail()
```

##### `ResetHasOrganizationProjects` <a name="ResetHasOrganizationProjects" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetHasOrganizationProjects"></a>

```csharp
private void ResetHasOrganizationProjects()
```

##### `ResetHasRepositoryProjects` <a name="ResetHasRepositoryProjects" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetHasRepositoryProjects"></a>

```csharp
private void ResetHasRepositoryProjects()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetMembersCanCreateInternalRepositories` <a name="ResetMembersCanCreateInternalRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetMembersCanCreateInternalRepositories"></a>

```csharp
private void ResetMembersCanCreateInternalRepositories()
```

##### `ResetMembersCanCreatePages` <a name="ResetMembersCanCreatePages" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetMembersCanCreatePages"></a>

```csharp
private void ResetMembersCanCreatePages()
```

##### `ResetMembersCanCreatePrivatePages` <a name="ResetMembersCanCreatePrivatePages" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetMembersCanCreatePrivatePages"></a>

```csharp
private void ResetMembersCanCreatePrivatePages()
```

##### `ResetMembersCanCreatePrivateRepositories` <a name="ResetMembersCanCreatePrivateRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetMembersCanCreatePrivateRepositories"></a>

```csharp
private void ResetMembersCanCreatePrivateRepositories()
```

##### `ResetMembersCanCreatePublicPages` <a name="ResetMembersCanCreatePublicPages" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetMembersCanCreatePublicPages"></a>

```csharp
private void ResetMembersCanCreatePublicPages()
```

##### `ResetMembersCanCreatePublicRepositories` <a name="ResetMembersCanCreatePublicRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetMembersCanCreatePublicRepositories"></a>

```csharp
private void ResetMembersCanCreatePublicRepositories()
```

##### `ResetMembersCanCreateRepositories` <a name="ResetMembersCanCreateRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetMembersCanCreateRepositories"></a>

```csharp
private void ResetMembersCanCreateRepositories()
```

##### `ResetMembersCanForkPrivateRepositories` <a name="ResetMembersCanForkPrivateRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetMembersCanForkPrivateRepositories"></a>

```csharp
private void ResetMembersCanForkPrivateRepositories()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetSecretScanningEnabledForNewRepositories` <a name="ResetSecretScanningEnabledForNewRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetSecretScanningEnabledForNewRepositories"></a>

```csharp
private void ResetSecretScanningEnabledForNewRepositories()
```

##### `ResetSecretScanningPushProtectionEnabledForNewRepositories` <a name="ResetSecretScanningPushProtectionEnabledForNewRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetSecretScanningPushProtectionEnabledForNewRepositories"></a>

```csharp
private void ResetSecretScanningPushProtectionEnabledForNewRepositories()
```

##### `ResetTwitterUsername` <a name="ResetTwitterUsername" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetTwitterUsername"></a>

```csharp
private void ResetTwitterUsername()
```

##### `ResetWebCommitSignoffRequired` <a name="ResetWebCommitSignoffRequired" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.resetWebCommitSignoffRequired"></a>

```csharp
private void ResetWebCommitSignoffRequired()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

OrganizationSettings.IsConstruct(object X);
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

OrganizationSettings.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

OrganizationSettings.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.advancedSecurityEnabledForNewRepositoriesInput">AdvancedSecurityEnabledForNewRepositoriesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.billingEmailInput">BillingEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.blogInput">BlogInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.companyInput">CompanyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.defaultRepositoryPermissionInput">DefaultRepositoryPermissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.dependabotAlertsEnabledForNewRepositoriesInput">DependabotAlertsEnabledForNewRepositoriesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.dependabotSecurityUpdatesEnabledForNewRepositoriesInput">DependabotSecurityUpdatesEnabledForNewRepositoriesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.dependencyGraphEnabledForNewRepositoriesInput">DependencyGraphEnabledForNewRepositoriesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.emailInput">EmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.hasOrganizationProjectsInput">HasOrganizationProjectsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.hasRepositoryProjectsInput">HasRepositoryProjectsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreateInternalRepositoriesInput">MembersCanCreateInternalRepositoriesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreatePagesInput">MembersCanCreatePagesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreatePrivatePagesInput">MembersCanCreatePrivatePagesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreatePrivateRepositoriesInput">MembersCanCreatePrivateRepositoriesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreatePublicPagesInput">MembersCanCreatePublicPagesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreatePublicRepositoriesInput">MembersCanCreatePublicRepositoriesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreateRepositoriesInput">MembersCanCreateRepositoriesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanForkPrivateRepositoriesInput">MembersCanForkPrivateRepositoriesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.secretScanningEnabledForNewRepositoriesInput">SecretScanningEnabledForNewRepositoriesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.secretScanningPushProtectionEnabledForNewRepositoriesInput">SecretScanningPushProtectionEnabledForNewRepositoriesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.twitterUsernameInput">TwitterUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.webCommitSignoffRequiredInput">WebCommitSignoffRequiredInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.advancedSecurityEnabledForNewRepositories">AdvancedSecurityEnabledForNewRepositories</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.billingEmail">BillingEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.blog">Blog</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.company">Company</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.defaultRepositoryPermission">DefaultRepositoryPermission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.dependabotAlertsEnabledForNewRepositories">DependabotAlertsEnabledForNewRepositories</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.dependabotSecurityUpdatesEnabledForNewRepositories">DependabotSecurityUpdatesEnabledForNewRepositories</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.dependencyGraphEnabledForNewRepositories">DependencyGraphEnabledForNewRepositories</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.hasOrganizationProjects">HasOrganizationProjects</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.hasRepositoryProjects">HasRepositoryProjects</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreateInternalRepositories">MembersCanCreateInternalRepositories</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreatePages">MembersCanCreatePages</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreatePrivatePages">MembersCanCreatePrivatePages</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreatePrivateRepositories">MembersCanCreatePrivateRepositories</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreatePublicPages">MembersCanCreatePublicPages</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreatePublicRepositories">MembersCanCreatePublicRepositories</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreateRepositories">MembersCanCreateRepositories</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanForkPrivateRepositories">MembersCanForkPrivateRepositories</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.secretScanningEnabledForNewRepositories">SecretScanningEnabledForNewRepositories</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.secretScanningPushProtectionEnabledForNewRepositories">SecretScanningPushProtectionEnabledForNewRepositories</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.twitterUsername">TwitterUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.webCommitSignoffRequired">WebCommitSignoffRequired</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AdvancedSecurityEnabledForNewRepositoriesInput`<sup>Optional</sup> <a name="AdvancedSecurityEnabledForNewRepositoriesInput" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.advancedSecurityEnabledForNewRepositoriesInput"></a>

```csharp
public object AdvancedSecurityEnabledForNewRepositoriesInput { get; }
```

- *Type:* object

---

##### `BillingEmailInput`<sup>Optional</sup> <a name="BillingEmailInput" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.billingEmailInput"></a>

```csharp
public string BillingEmailInput { get; }
```

- *Type:* string

---

##### `BlogInput`<sup>Optional</sup> <a name="BlogInput" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.blogInput"></a>

```csharp
public string BlogInput { get; }
```

- *Type:* string

---

##### `CompanyInput`<sup>Optional</sup> <a name="CompanyInput" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.companyInput"></a>

```csharp
public string CompanyInput { get; }
```

- *Type:* string

---

##### `DefaultRepositoryPermissionInput`<sup>Optional</sup> <a name="DefaultRepositoryPermissionInput" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.defaultRepositoryPermissionInput"></a>

```csharp
public string DefaultRepositoryPermissionInput { get; }
```

- *Type:* string

---

##### `DependabotAlertsEnabledForNewRepositoriesInput`<sup>Optional</sup> <a name="DependabotAlertsEnabledForNewRepositoriesInput" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.dependabotAlertsEnabledForNewRepositoriesInput"></a>

```csharp
public object DependabotAlertsEnabledForNewRepositoriesInput { get; }
```

- *Type:* object

---

##### `DependabotSecurityUpdatesEnabledForNewRepositoriesInput`<sup>Optional</sup> <a name="DependabotSecurityUpdatesEnabledForNewRepositoriesInput" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.dependabotSecurityUpdatesEnabledForNewRepositoriesInput"></a>

```csharp
public object DependabotSecurityUpdatesEnabledForNewRepositoriesInput { get; }
```

- *Type:* object

---

##### `DependencyGraphEnabledForNewRepositoriesInput`<sup>Optional</sup> <a name="DependencyGraphEnabledForNewRepositoriesInput" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.dependencyGraphEnabledForNewRepositoriesInput"></a>

```csharp
public object DependencyGraphEnabledForNewRepositoriesInput { get; }
```

- *Type:* object

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.emailInput"></a>

```csharp
public string EmailInput { get; }
```

- *Type:* string

---

##### `HasOrganizationProjectsInput`<sup>Optional</sup> <a name="HasOrganizationProjectsInput" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.hasOrganizationProjectsInput"></a>

```csharp
public object HasOrganizationProjectsInput { get; }
```

- *Type:* object

---

##### `HasRepositoryProjectsInput`<sup>Optional</sup> <a name="HasRepositoryProjectsInput" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.hasRepositoryProjectsInput"></a>

```csharp
public object HasRepositoryProjectsInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MembersCanCreateInternalRepositoriesInput`<sup>Optional</sup> <a name="MembersCanCreateInternalRepositoriesInput" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreateInternalRepositoriesInput"></a>

```csharp
public object MembersCanCreateInternalRepositoriesInput { get; }
```

- *Type:* object

---

##### `MembersCanCreatePagesInput`<sup>Optional</sup> <a name="MembersCanCreatePagesInput" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreatePagesInput"></a>

```csharp
public object MembersCanCreatePagesInput { get; }
```

- *Type:* object

---

##### `MembersCanCreatePrivatePagesInput`<sup>Optional</sup> <a name="MembersCanCreatePrivatePagesInput" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreatePrivatePagesInput"></a>

```csharp
public object MembersCanCreatePrivatePagesInput { get; }
```

- *Type:* object

---

##### `MembersCanCreatePrivateRepositoriesInput`<sup>Optional</sup> <a name="MembersCanCreatePrivateRepositoriesInput" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreatePrivateRepositoriesInput"></a>

```csharp
public object MembersCanCreatePrivateRepositoriesInput { get; }
```

- *Type:* object

---

##### `MembersCanCreatePublicPagesInput`<sup>Optional</sup> <a name="MembersCanCreatePublicPagesInput" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreatePublicPagesInput"></a>

```csharp
public object MembersCanCreatePublicPagesInput { get; }
```

- *Type:* object

---

##### `MembersCanCreatePublicRepositoriesInput`<sup>Optional</sup> <a name="MembersCanCreatePublicRepositoriesInput" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreatePublicRepositoriesInput"></a>

```csharp
public object MembersCanCreatePublicRepositoriesInput { get; }
```

- *Type:* object

---

##### `MembersCanCreateRepositoriesInput`<sup>Optional</sup> <a name="MembersCanCreateRepositoriesInput" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreateRepositoriesInput"></a>

```csharp
public object MembersCanCreateRepositoriesInput { get; }
```

- *Type:* object

---

##### `MembersCanForkPrivateRepositoriesInput`<sup>Optional</sup> <a name="MembersCanForkPrivateRepositoriesInput" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanForkPrivateRepositoriesInput"></a>

```csharp
public object MembersCanForkPrivateRepositoriesInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SecretScanningEnabledForNewRepositoriesInput`<sup>Optional</sup> <a name="SecretScanningEnabledForNewRepositoriesInput" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.secretScanningEnabledForNewRepositoriesInput"></a>

```csharp
public object SecretScanningEnabledForNewRepositoriesInput { get; }
```

- *Type:* object

---

##### `SecretScanningPushProtectionEnabledForNewRepositoriesInput`<sup>Optional</sup> <a name="SecretScanningPushProtectionEnabledForNewRepositoriesInput" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.secretScanningPushProtectionEnabledForNewRepositoriesInput"></a>

```csharp
public object SecretScanningPushProtectionEnabledForNewRepositoriesInput { get; }
```

- *Type:* object

---

##### `TwitterUsernameInput`<sup>Optional</sup> <a name="TwitterUsernameInput" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.twitterUsernameInput"></a>

```csharp
public string TwitterUsernameInput { get; }
```

- *Type:* string

---

##### `WebCommitSignoffRequiredInput`<sup>Optional</sup> <a name="WebCommitSignoffRequiredInput" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.webCommitSignoffRequiredInput"></a>

```csharp
public object WebCommitSignoffRequiredInput { get; }
```

- *Type:* object

---

##### `AdvancedSecurityEnabledForNewRepositories`<sup>Required</sup> <a name="AdvancedSecurityEnabledForNewRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.advancedSecurityEnabledForNewRepositories"></a>

```csharp
public object AdvancedSecurityEnabledForNewRepositories { get; }
```

- *Type:* object

---

##### `BillingEmail`<sup>Required</sup> <a name="BillingEmail" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.billingEmail"></a>

```csharp
public string BillingEmail { get; }
```

- *Type:* string

---

##### `Blog`<sup>Required</sup> <a name="Blog" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.blog"></a>

```csharp
public string Blog { get; }
```

- *Type:* string

---

##### `Company`<sup>Required</sup> <a name="Company" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.company"></a>

```csharp
public string Company { get; }
```

- *Type:* string

---

##### `DefaultRepositoryPermission`<sup>Required</sup> <a name="DefaultRepositoryPermission" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.defaultRepositoryPermission"></a>

```csharp
public string DefaultRepositoryPermission { get; }
```

- *Type:* string

---

##### `DependabotAlertsEnabledForNewRepositories`<sup>Required</sup> <a name="DependabotAlertsEnabledForNewRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.dependabotAlertsEnabledForNewRepositories"></a>

```csharp
public object DependabotAlertsEnabledForNewRepositories { get; }
```

- *Type:* object

---

##### `DependabotSecurityUpdatesEnabledForNewRepositories`<sup>Required</sup> <a name="DependabotSecurityUpdatesEnabledForNewRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.dependabotSecurityUpdatesEnabledForNewRepositories"></a>

```csharp
public object DependabotSecurityUpdatesEnabledForNewRepositories { get; }
```

- *Type:* object

---

##### `DependencyGraphEnabledForNewRepositories`<sup>Required</sup> <a name="DependencyGraphEnabledForNewRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.dependencyGraphEnabledForNewRepositories"></a>

```csharp
public object DependencyGraphEnabledForNewRepositories { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `HasOrganizationProjects`<sup>Required</sup> <a name="HasOrganizationProjects" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.hasOrganizationProjects"></a>

```csharp
public object HasOrganizationProjects { get; }
```

- *Type:* object

---

##### `HasRepositoryProjects`<sup>Required</sup> <a name="HasRepositoryProjects" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.hasRepositoryProjects"></a>

```csharp
public object HasRepositoryProjects { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `MembersCanCreateInternalRepositories`<sup>Required</sup> <a name="MembersCanCreateInternalRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreateInternalRepositories"></a>

```csharp
public object MembersCanCreateInternalRepositories { get; }
```

- *Type:* object

---

##### `MembersCanCreatePages`<sup>Required</sup> <a name="MembersCanCreatePages" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreatePages"></a>

```csharp
public object MembersCanCreatePages { get; }
```

- *Type:* object

---

##### `MembersCanCreatePrivatePages`<sup>Required</sup> <a name="MembersCanCreatePrivatePages" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreatePrivatePages"></a>

```csharp
public object MembersCanCreatePrivatePages { get; }
```

- *Type:* object

---

##### `MembersCanCreatePrivateRepositories`<sup>Required</sup> <a name="MembersCanCreatePrivateRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreatePrivateRepositories"></a>

```csharp
public object MembersCanCreatePrivateRepositories { get; }
```

- *Type:* object

---

##### `MembersCanCreatePublicPages`<sup>Required</sup> <a name="MembersCanCreatePublicPages" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreatePublicPages"></a>

```csharp
public object MembersCanCreatePublicPages { get; }
```

- *Type:* object

---

##### `MembersCanCreatePublicRepositories`<sup>Required</sup> <a name="MembersCanCreatePublicRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreatePublicRepositories"></a>

```csharp
public object MembersCanCreatePublicRepositories { get; }
```

- *Type:* object

---

##### `MembersCanCreateRepositories`<sup>Required</sup> <a name="MembersCanCreateRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanCreateRepositories"></a>

```csharp
public object MembersCanCreateRepositories { get; }
```

- *Type:* object

---

##### `MembersCanForkPrivateRepositories`<sup>Required</sup> <a name="MembersCanForkPrivateRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.membersCanForkPrivateRepositories"></a>

```csharp
public object MembersCanForkPrivateRepositories { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SecretScanningEnabledForNewRepositories`<sup>Required</sup> <a name="SecretScanningEnabledForNewRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.secretScanningEnabledForNewRepositories"></a>

```csharp
public object SecretScanningEnabledForNewRepositories { get; }
```

- *Type:* object

---

##### `SecretScanningPushProtectionEnabledForNewRepositories`<sup>Required</sup> <a name="SecretScanningPushProtectionEnabledForNewRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.secretScanningPushProtectionEnabledForNewRepositories"></a>

```csharp
public object SecretScanningPushProtectionEnabledForNewRepositories { get; }
```

- *Type:* object

---

##### `TwitterUsername`<sup>Required</sup> <a name="TwitterUsername" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.twitterUsername"></a>

```csharp
public string TwitterUsername { get; }
```

- *Type:* string

---

##### `WebCommitSignoffRequired`<sup>Required</sup> <a name="WebCommitSignoffRequired" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.webCommitSignoffRequired"></a>

```csharp
public object WebCommitSignoffRequired { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettings.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-github.organizationSettings.OrganizationSettings.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OrganizationSettingsConfig <a name="OrganizationSettingsConfig" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new OrganizationSettingsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string BillingEmail,
    object AdvancedSecurityEnabledForNewRepositories = null,
    string Blog = null,
    string Company = null,
    string DefaultRepositoryPermission = null,
    object DependabotAlertsEnabledForNewRepositories = null,
    object DependabotSecurityUpdatesEnabledForNewRepositories = null,
    object DependencyGraphEnabledForNewRepositories = null,
    string Description = null,
    string Email = null,
    object HasOrganizationProjects = null,
    object HasRepositoryProjects = null,
    string Id = null,
    string Location = null,
    object MembersCanCreateInternalRepositories = null,
    object MembersCanCreatePages = null,
    object MembersCanCreatePrivatePages = null,
    object MembersCanCreatePrivateRepositories = null,
    object MembersCanCreatePublicPages = null,
    object MembersCanCreatePublicRepositories = null,
    object MembersCanCreateRepositories = null,
    object MembersCanForkPrivateRepositories = null,
    string Name = null,
    object SecretScanningEnabledForNewRepositories = null,
    object SecretScanningPushProtectionEnabledForNewRepositories = null,
    string TwitterUsername = null,
    object WebCommitSignoffRequired = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.billingEmail">BillingEmail</a></code> | <code>string</code> | The billing email address for the organization. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.advancedSecurityEnabledForNewRepositories">AdvancedSecurityEnabledForNewRepositories</a></code> | <code>object</code> | Whether or not advanced security is enabled for new repositories. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.blog">Blog</a></code> | <code>string</code> | The blog URL for the organization. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.company">Company</a></code> | <code>string</code> | The company name for the organization. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.defaultRepositoryPermission">DefaultRepositoryPermission</a></code> | <code>string</code> | The default permission for organization members to create new repositories. Can be one of 'read', 'write', 'admin' or 'none'. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.dependabotAlertsEnabledForNewRepositories">DependabotAlertsEnabledForNewRepositories</a></code> | <code>object</code> | Whether or not dependabot alerts are enabled for new repositories. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.dependabotSecurityUpdatesEnabledForNewRepositories">DependabotSecurityUpdatesEnabledForNewRepositories</a></code> | <code>object</code> | Whether or not dependabot security updates are enabled for new repositories. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.dependencyGraphEnabledForNewRepositories">DependencyGraphEnabledForNewRepositories</a></code> | <code>object</code> | Whether or not dependency graph is enabled for new repositories. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.description">Description</a></code> | <code>string</code> | The description for the organization. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.email">Email</a></code> | <code>string</code> | The email address for the organization. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.hasOrganizationProjects">HasOrganizationProjects</a></code> | <code>object</code> | Whether or not organization projects are enabled for the organization. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.hasRepositoryProjects">HasRepositoryProjects</a></code> | <code>object</code> | Whether or not repository projects are enabled for the organization. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.28.1/docs/resources/organization_settings#id OrganizationSettings#id}. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.location">Location</a></code> | <code>string</code> | The location for the organization. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.membersCanCreateInternalRepositories">MembersCanCreateInternalRepositories</a></code> | <code>object</code> | Whether or not organization members can create new internal repositories. For Enterprise Organizations only. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.membersCanCreatePages">MembersCanCreatePages</a></code> | <code>object</code> | Whether or not organization members can create new pages. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.membersCanCreatePrivatePages">MembersCanCreatePrivatePages</a></code> | <code>object</code> | Whether or not organization members can create new private pages. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.membersCanCreatePrivateRepositories">MembersCanCreatePrivateRepositories</a></code> | <code>object</code> | Whether or not organization members can create new private repositories. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.membersCanCreatePublicPages">MembersCanCreatePublicPages</a></code> | <code>object</code> | Whether or not organization members can create new public pages. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.membersCanCreatePublicRepositories">MembersCanCreatePublicRepositories</a></code> | <code>object</code> | Whether or not organization members can create new public repositories. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.membersCanCreateRepositories">MembersCanCreateRepositories</a></code> | <code>object</code> | Whether or not organization members can create new repositories. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.membersCanForkPrivateRepositories">MembersCanForkPrivateRepositories</a></code> | <code>object</code> | Whether or not organization members can fork private repositories. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.name">Name</a></code> | <code>string</code> | The name for the organization. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.secretScanningEnabledForNewRepositories">SecretScanningEnabledForNewRepositories</a></code> | <code>object</code> | Whether or not secret scanning is enabled for new repositories. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.secretScanningPushProtectionEnabledForNewRepositories">SecretScanningPushProtectionEnabledForNewRepositories</a></code> | <code>object</code> | Whether or not secret scanning push protection is enabled for new repositories. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.twitterUsername">TwitterUsername</a></code> | <code>string</code> | The Twitter username for the organization. |
| <code><a href="#@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.webCommitSignoffRequired">WebCommitSignoffRequired</a></code> | <code>object</code> | Whether or not commit signatures are required for commits to the organization. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `BillingEmail`<sup>Required</sup> <a name="BillingEmail" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.billingEmail"></a>

```csharp
public string BillingEmail { get; set; }
```

- *Type:* string

The billing email address for the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.28.1/docs/resources/organization_settings#billing_email OrganizationSettings#billing_email}

---

##### `AdvancedSecurityEnabledForNewRepositories`<sup>Optional</sup> <a name="AdvancedSecurityEnabledForNewRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.advancedSecurityEnabledForNewRepositories"></a>

```csharp
public object AdvancedSecurityEnabledForNewRepositories { get; set; }
```

- *Type:* object

Whether or not advanced security is enabled for new repositories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.28.1/docs/resources/organization_settings#advanced_security_enabled_for_new_repositories OrganizationSettings#advanced_security_enabled_for_new_repositories}

---

##### `Blog`<sup>Optional</sup> <a name="Blog" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.blog"></a>

```csharp
public string Blog { get; set; }
```

- *Type:* string

The blog URL for the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.28.1/docs/resources/organization_settings#blog OrganizationSettings#blog}

---

##### `Company`<sup>Optional</sup> <a name="Company" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.company"></a>

```csharp
public string Company { get; set; }
```

- *Type:* string

The company name for the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.28.1/docs/resources/organization_settings#company OrganizationSettings#company}

---

##### `DefaultRepositoryPermission`<sup>Optional</sup> <a name="DefaultRepositoryPermission" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.defaultRepositoryPermission"></a>

```csharp
public string DefaultRepositoryPermission { get; set; }
```

- *Type:* string

The default permission for organization members to create new repositories. Can be one of 'read', 'write', 'admin' or 'none'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.28.1/docs/resources/organization_settings#default_repository_permission OrganizationSettings#default_repository_permission}

---

##### `DependabotAlertsEnabledForNewRepositories`<sup>Optional</sup> <a name="DependabotAlertsEnabledForNewRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.dependabotAlertsEnabledForNewRepositories"></a>

```csharp
public object DependabotAlertsEnabledForNewRepositories { get; set; }
```

- *Type:* object

Whether or not dependabot alerts are enabled for new repositories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.28.1/docs/resources/organization_settings#dependabot_alerts_enabled_for_new_repositories OrganizationSettings#dependabot_alerts_enabled_for_new_repositories}

---

##### `DependabotSecurityUpdatesEnabledForNewRepositories`<sup>Optional</sup> <a name="DependabotSecurityUpdatesEnabledForNewRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.dependabotSecurityUpdatesEnabledForNewRepositories"></a>

```csharp
public object DependabotSecurityUpdatesEnabledForNewRepositories { get; set; }
```

- *Type:* object

Whether or not dependabot security updates are enabled for new repositories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.28.1/docs/resources/organization_settings#dependabot_security_updates_enabled_for_new_repositories OrganizationSettings#dependabot_security_updates_enabled_for_new_repositories}

---

##### `DependencyGraphEnabledForNewRepositories`<sup>Optional</sup> <a name="DependencyGraphEnabledForNewRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.dependencyGraphEnabledForNewRepositories"></a>

```csharp
public object DependencyGraphEnabledForNewRepositories { get; set; }
```

- *Type:* object

Whether or not dependency graph is enabled for new repositories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.28.1/docs/resources/organization_settings#dependency_graph_enabled_for_new_repositories OrganizationSettings#dependency_graph_enabled_for_new_repositories}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description for the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.28.1/docs/resources/organization_settings#description OrganizationSettings#description}

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.email"></a>

```csharp
public string Email { get; set; }
```

- *Type:* string

The email address for the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.28.1/docs/resources/organization_settings#email OrganizationSettings#email}

---

##### `HasOrganizationProjects`<sup>Optional</sup> <a name="HasOrganizationProjects" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.hasOrganizationProjects"></a>

```csharp
public object HasOrganizationProjects { get; set; }
```

- *Type:* object

Whether or not organization projects are enabled for the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.28.1/docs/resources/organization_settings#has_organization_projects OrganizationSettings#has_organization_projects}

---

##### `HasRepositoryProjects`<sup>Optional</sup> <a name="HasRepositoryProjects" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.hasRepositoryProjects"></a>

```csharp
public object HasRepositoryProjects { get; set; }
```

- *Type:* object

Whether or not repository projects are enabled for the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.28.1/docs/resources/organization_settings#has_repository_projects OrganizationSettings#has_repository_projects}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.28.1/docs/resources/organization_settings#id OrganizationSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location for the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.28.1/docs/resources/organization_settings#location OrganizationSettings#location}

---

##### `MembersCanCreateInternalRepositories`<sup>Optional</sup> <a name="MembersCanCreateInternalRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.membersCanCreateInternalRepositories"></a>

```csharp
public object MembersCanCreateInternalRepositories { get; set; }
```

- *Type:* object

Whether or not organization members can create new internal repositories. For Enterprise Organizations only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.28.1/docs/resources/organization_settings#members_can_create_internal_repositories OrganizationSettings#members_can_create_internal_repositories}

---

##### `MembersCanCreatePages`<sup>Optional</sup> <a name="MembersCanCreatePages" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.membersCanCreatePages"></a>

```csharp
public object MembersCanCreatePages { get; set; }
```

- *Type:* object

Whether or not organization members can create new pages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.28.1/docs/resources/organization_settings#members_can_create_pages OrganizationSettings#members_can_create_pages}

---

##### `MembersCanCreatePrivatePages`<sup>Optional</sup> <a name="MembersCanCreatePrivatePages" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.membersCanCreatePrivatePages"></a>

```csharp
public object MembersCanCreatePrivatePages { get; set; }
```

- *Type:* object

Whether or not organization members can create new private pages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.28.1/docs/resources/organization_settings#members_can_create_private_pages OrganizationSettings#members_can_create_private_pages}

---

##### `MembersCanCreatePrivateRepositories`<sup>Optional</sup> <a name="MembersCanCreatePrivateRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.membersCanCreatePrivateRepositories"></a>

```csharp
public object MembersCanCreatePrivateRepositories { get; set; }
```

- *Type:* object

Whether or not organization members can create new private repositories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.28.1/docs/resources/organization_settings#members_can_create_private_repositories OrganizationSettings#members_can_create_private_repositories}

---

##### `MembersCanCreatePublicPages`<sup>Optional</sup> <a name="MembersCanCreatePublicPages" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.membersCanCreatePublicPages"></a>

```csharp
public object MembersCanCreatePublicPages { get; set; }
```

- *Type:* object

Whether or not organization members can create new public pages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.28.1/docs/resources/organization_settings#members_can_create_public_pages OrganizationSettings#members_can_create_public_pages}

---

##### `MembersCanCreatePublicRepositories`<sup>Optional</sup> <a name="MembersCanCreatePublicRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.membersCanCreatePublicRepositories"></a>

```csharp
public object MembersCanCreatePublicRepositories { get; set; }
```

- *Type:* object

Whether or not organization members can create new public repositories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.28.1/docs/resources/organization_settings#members_can_create_public_repositories OrganizationSettings#members_can_create_public_repositories}

---

##### `MembersCanCreateRepositories`<sup>Optional</sup> <a name="MembersCanCreateRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.membersCanCreateRepositories"></a>

```csharp
public object MembersCanCreateRepositories { get; set; }
```

- *Type:* object

Whether or not organization members can create new repositories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.28.1/docs/resources/organization_settings#members_can_create_repositories OrganizationSettings#members_can_create_repositories}

---

##### `MembersCanForkPrivateRepositories`<sup>Optional</sup> <a name="MembersCanForkPrivateRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.membersCanForkPrivateRepositories"></a>

```csharp
public object MembersCanForkPrivateRepositories { get; set; }
```

- *Type:* object

Whether or not organization members can fork private repositories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.28.1/docs/resources/organization_settings#members_can_fork_private_repositories OrganizationSettings#members_can_fork_private_repositories}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name for the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.28.1/docs/resources/organization_settings#name OrganizationSettings#name}

---

##### `SecretScanningEnabledForNewRepositories`<sup>Optional</sup> <a name="SecretScanningEnabledForNewRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.secretScanningEnabledForNewRepositories"></a>

```csharp
public object SecretScanningEnabledForNewRepositories { get; set; }
```

- *Type:* object

Whether or not secret scanning is enabled for new repositories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.28.1/docs/resources/organization_settings#secret_scanning_enabled_for_new_repositories OrganizationSettings#secret_scanning_enabled_for_new_repositories}

---

##### `SecretScanningPushProtectionEnabledForNewRepositories`<sup>Optional</sup> <a name="SecretScanningPushProtectionEnabledForNewRepositories" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.secretScanningPushProtectionEnabledForNewRepositories"></a>

```csharp
public object SecretScanningPushProtectionEnabledForNewRepositories { get; set; }
```

- *Type:* object

Whether or not secret scanning push protection is enabled for new repositories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.28.1/docs/resources/organization_settings#secret_scanning_push_protection_enabled_for_new_repositories OrganizationSettings#secret_scanning_push_protection_enabled_for_new_repositories}

---

##### `TwitterUsername`<sup>Optional</sup> <a name="TwitterUsername" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.twitterUsername"></a>

```csharp
public string TwitterUsername { get; set; }
```

- *Type:* string

The Twitter username for the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.28.1/docs/resources/organization_settings#twitter_username OrganizationSettings#twitter_username}

---

##### `WebCommitSignoffRequired`<sup>Optional</sup> <a name="WebCommitSignoffRequired" id="@cdktf/provider-github.organizationSettings.OrganizationSettingsConfig.property.webCommitSignoffRequired"></a>

```csharp
public object WebCommitSignoffRequired { get; set; }
```

- *Type:* object

Whether or not commit signatures are required for commits to the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.28.1/docs/resources/organization_settings#web_commit_signoff_required OrganizationSettings#web_commit_signoff_required}

---



