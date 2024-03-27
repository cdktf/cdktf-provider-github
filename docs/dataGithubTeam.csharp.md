# `dataGithubTeam` Submodule <a name="`dataGithubTeam` Submodule" id="@cdktf/provider-github.dataGithubTeam"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGithubTeam <a name="DataGithubTeam" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.2.1/docs/data-sources/team github_team}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new DataGithubTeam(Construct Scope, string Id, DataGithubTeamConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamConfig">DataGithubTeamConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamConfig">DataGithubTeamConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.resetMembershipType">ResetMembershipType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.resetResultsPerPage">ResetResultsPerPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.resetSummaryOnly">ResetSummaryOnly</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMembershipType` <a name="ResetMembershipType" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.resetMembershipType"></a>

```csharp
private void ResetMembershipType()
```

##### `ResetResultsPerPage` <a name="ResetResultsPerPage" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.resetResultsPerPage"></a>

```csharp
private void ResetResultsPerPage()
```

##### `ResetSummaryOnly` <a name="ResetSummaryOnly" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.resetSummaryOnly"></a>

```csharp
private void ResetSummaryOnly()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGithubTeam resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

DataGithubTeam.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

DataGithubTeam.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

DataGithubTeam.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

DataGithubTeam.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataGithubTeam resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGithubTeam to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGithubTeam that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.2.1/docs/data-sources/team#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataGithubTeam to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.members">Members</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.nodeId">NodeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.permission">Permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.privacy">Privacy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.repositories">Repositories</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.repositoriesDetailed">RepositoriesDetailed</a></code> | <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedList">DataGithubTeamRepositoriesDetailedList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.membershipTypeInput">MembershipTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.resultsPerPageInput">ResultsPerPageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.slugInput">SlugInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.summaryOnlyInput">SummaryOnlyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.membershipType">MembershipType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.resultsPerPage">ResultsPerPage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.slug">Slug</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.summaryOnly">SummaryOnly</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.members"></a>

```csharp
public string[] Members { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NodeId`<sup>Required</sup> <a name="NodeId" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.nodeId"></a>

```csharp
public string NodeId { get; }
```

- *Type:* string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.permission"></a>

```csharp
public string Permission { get; }
```

- *Type:* string

---

##### `Privacy`<sup>Required</sup> <a name="Privacy" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.privacy"></a>

```csharp
public string Privacy { get; }
```

- *Type:* string

---

##### `Repositories`<sup>Required</sup> <a name="Repositories" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.repositories"></a>

```csharp
public string[] Repositories { get; }
```

- *Type:* string[]

---

##### `RepositoriesDetailed`<sup>Required</sup> <a name="RepositoriesDetailed" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.repositoriesDetailed"></a>

```csharp
public DataGithubTeamRepositoriesDetailedList RepositoriesDetailed { get; }
```

- *Type:* <a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedList">DataGithubTeamRepositoriesDetailedList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MembershipTypeInput`<sup>Optional</sup> <a name="MembershipTypeInput" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.membershipTypeInput"></a>

```csharp
public string MembershipTypeInput { get; }
```

- *Type:* string

---

##### `ResultsPerPageInput`<sup>Optional</sup> <a name="ResultsPerPageInput" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.resultsPerPageInput"></a>

```csharp
public double ResultsPerPageInput { get; }
```

- *Type:* double

---

##### `SlugInput`<sup>Optional</sup> <a name="SlugInput" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.slugInput"></a>

```csharp
public string SlugInput { get; }
```

- *Type:* string

---

##### `SummaryOnlyInput`<sup>Optional</sup> <a name="SummaryOnlyInput" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.summaryOnlyInput"></a>

```csharp
public object SummaryOnlyInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MembershipType`<sup>Required</sup> <a name="MembershipType" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.membershipType"></a>

```csharp
public string MembershipType { get; }
```

- *Type:* string

---

##### `ResultsPerPage`<sup>Required</sup> <a name="ResultsPerPage" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.resultsPerPage"></a>

```csharp
public double ResultsPerPage { get; }
```

- *Type:* double

---

##### `Slug`<sup>Required</sup> <a name="Slug" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.slug"></a>

```csharp
public string Slug { get; }
```

- *Type:* string

---

##### `SummaryOnly`<sup>Required</sup> <a name="SummaryOnly" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.summaryOnly"></a>

```csharp
public object SummaryOnly { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeam.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGithubTeamConfig <a name="DataGithubTeamConfig" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new DataGithubTeamConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Slug,
    string Id = null,
    string MembershipType = null,
    double ResultsPerPage = null,
    object SummaryOnly = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamConfig.property.slug">Slug</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.1/docs/data-sources/team#slug DataGithubTeam#slug}. |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.1/docs/data-sources/team#id DataGithubTeam#id}. |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamConfig.property.membershipType">MembershipType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.1/docs/data-sources/team#membership_type DataGithubTeam#membership_type}. |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamConfig.property.resultsPerPage">ResultsPerPage</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.1/docs/data-sources/team#results_per_page DataGithubTeam#results_per_page}. |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamConfig.property.summaryOnly">SummaryOnly</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.1/docs/data-sources/team#summary_only DataGithubTeam#summary_only}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Slug`<sup>Required</sup> <a name="Slug" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamConfig.property.slug"></a>

```csharp
public string Slug { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.1/docs/data-sources/team#slug DataGithubTeam#slug}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.1/docs/data-sources/team#id DataGithubTeam#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MembershipType`<sup>Optional</sup> <a name="MembershipType" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamConfig.property.membershipType"></a>

```csharp
public string MembershipType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.1/docs/data-sources/team#membership_type DataGithubTeam#membership_type}.

---

##### `ResultsPerPage`<sup>Optional</sup> <a name="ResultsPerPage" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamConfig.property.resultsPerPage"></a>

```csharp
public double ResultsPerPage { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.1/docs/data-sources/team#results_per_page DataGithubTeam#results_per_page}.

---

##### `SummaryOnly`<sup>Optional</sup> <a name="SummaryOnly" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamConfig.property.summaryOnly"></a>

```csharp
public object SummaryOnly { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.1/docs/data-sources/team#summary_only DataGithubTeam#summary_only}.

---

### DataGithubTeamRepositoriesDetailed <a name="DataGithubTeamRepositoriesDetailed" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailed"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailed.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new DataGithubTeamRepositoriesDetailed {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGithubTeamRepositoriesDetailedList <a name="DataGithubTeamRepositoriesDetailedList" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new DataGithubTeamRepositoriesDetailedList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedList.get"></a>

```csharp
private DataGithubTeamRepositoriesDetailedOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGithubTeamRepositoriesDetailedOutputReference <a name="DataGithubTeamRepositoriesDetailedOutputReference" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new DataGithubTeamRepositoriesDetailedOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.property.repoId">RepoId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.property.roleName">RoleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailed">DataGithubTeamRepositoriesDetailed</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RepoId`<sup>Required</sup> <a name="RepoId" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.property.repoId"></a>

```csharp
public double RepoId { get; }
```

- *Type:* double

---

##### `RoleName`<sup>Required</sup> <a name="RoleName" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.property.roleName"></a>

```csharp
public string RoleName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailedOutputReference.property.internalValue"></a>

```csharp
public DataGithubTeamRepositoriesDetailed InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-github.dataGithubTeam.DataGithubTeamRepositoriesDetailed">DataGithubTeamRepositoriesDetailed</a>

---



