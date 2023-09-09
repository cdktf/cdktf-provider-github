# `data_github_organization_team_sync_groups`

Refer to the Terraform Registory for docs: [`data_github_organization_team_sync_groups`](https://registry.terraform.io/providers/integrations/github/5.35.0/docs/data-sources/organization_team_sync_groups).

# `dataGithubOrganizationTeamSyncGroups` Submodule <a name="`dataGithubOrganizationTeamSyncGroups` Submodule" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGithubOrganizationTeamSyncGroups <a name="DataGithubOrganizationTeamSyncGroups" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroups"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/5.35.0/docs/data-sources/organization_team_sync_groups github_organization_team_sync_groups}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroups.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new DataGithubOrganizationTeamSyncGroups(Construct Scope, string Id, DataGithubOrganizationTeamSyncGroupsConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroups.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroups.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroups.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsConfig">DataGithubOrganizationTeamSyncGroupsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroups.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroups.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroups.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsConfig">DataGithubOrganizationTeamSyncGroupsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroups.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroups.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroups.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroups.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroups.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroups.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroups.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroups.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroups.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroups.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroups.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroups.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroups.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroups.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroups.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroups.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroups.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroups.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroups.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroups.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroups.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroups.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroups.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroups.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroups.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroups.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroups.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroups.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroups.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroups.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroups.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroups.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroups.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroups.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroups.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroups.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroups.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroups.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroups.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroups.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroups.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroups.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroups.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroups.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroups.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroups.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroups.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroups.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroups.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroups.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroups.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

DataGithubOrganizationTeamSyncGroups.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroups.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroups.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

DataGithubOrganizationTeamSyncGroups.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroups.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroups.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

DataGithubOrganizationTeamSyncGroups.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroups.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroups.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroups.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroups.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroups.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroups.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroups.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroups.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroups.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroups.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroups.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroups.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroups.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroups.property.groups">Groups</a></code> | <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsGroupsList">DataGithubOrganizationTeamSyncGroupsGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroups.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroups.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroups.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroups.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroups.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroups.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroups.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroups.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroups.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroups.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroups.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroups.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroups.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroups.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Groups`<sup>Required</sup> <a name="Groups" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroups.property.groups"></a>

```csharp
public DataGithubOrganizationTeamSyncGroupsGroupsList Groups { get; }
```

- *Type:* <a href="#@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsGroupsList">DataGithubOrganizationTeamSyncGroupsGroupsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroups.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroups.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroups.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroups.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGithubOrganizationTeamSyncGroupsConfig <a name="DataGithubOrganizationTeamSyncGroupsConfig" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new DataGithubOrganizationTeamSyncGroupsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.35.0/docs/data-sources/organization_team_sync_groups#id DataGithubOrganizationTeamSyncGroups#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.35.0/docs/data-sources/organization_team_sync_groups#id DataGithubOrganizationTeamSyncGroups#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGithubOrganizationTeamSyncGroupsGroups <a name="DataGithubOrganizationTeamSyncGroupsGroups" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsGroups.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new DataGithubOrganizationTeamSyncGroupsGroups {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGithubOrganizationTeamSyncGroupsGroupsList <a name="DataGithubOrganizationTeamSyncGroupsGroupsList" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsGroupsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new DataGithubOrganizationTeamSyncGroupsGroupsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsGroupsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsGroupsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsGroupsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsGroupsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsGroupsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsGroupsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsGroupsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsGroupsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsGroupsList.get"></a>

```csharp
private DataGithubOrganizationTeamSyncGroupsGroupsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsGroupsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsGroupsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsGroupsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsGroupsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsGroupsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGithubOrganizationTeamSyncGroupsGroupsOutputReference <a name="DataGithubOrganizationTeamSyncGroupsGroupsOutputReference" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsGroupsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new DataGithubOrganizationTeamSyncGroupsGroupsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsGroupsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsGroupsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsGroupsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsGroupsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsGroupsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsGroupsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsGroupsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsGroupsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsGroupsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsGroupsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsGroupsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsGroupsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsGroupsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsGroupsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsGroupsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsGroupsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsGroupsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsGroupsOutputReference.property.groupDescription">GroupDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsGroupsOutputReference.property.groupId">GroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsGroupsOutputReference.property.groupName">GroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsGroups">DataGithubOrganizationTeamSyncGroupsGroups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsGroupsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsGroupsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GroupDescription`<sup>Required</sup> <a name="GroupDescription" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsGroupsOutputReference.property.groupDescription"></a>

```csharp
public string GroupDescription { get; }
```

- *Type:* string

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsGroupsOutputReference.property.groupId"></a>

```csharp
public string GroupId { get; }
```

- *Type:* string

---

##### `GroupName`<sup>Required</sup> <a name="GroupName" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsGroupsOutputReference.property.groupName"></a>

```csharp
public string GroupName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsGroupsOutputReference.property.internalValue"></a>

```csharp
public DataGithubOrganizationTeamSyncGroupsGroups InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-github.dataGithubOrganizationTeamSyncGroups.DataGithubOrganizationTeamSyncGroupsGroups">DataGithubOrganizationTeamSyncGroupsGroups</a>

---



